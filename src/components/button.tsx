import "./button.css";

/**
 * Basic button
 * @example
 * return <Button />
*/
const Button: React.FC<{
    /** Button's variant */
    variant?: "primary" | "second" | "danger" | "default" | "text";
    /** Button's content */
    children: React.ReactNode;
    /** Button's type */
    type?: "button" | "reset" | "submit";
    /** Button's disabled state */
    disabled?: boolean;
}> = ({
    variant="default",
    type="button",
    children,
    disabled
}) => {
    return (
        <button
            type={type}
            className={`btn-base btn-${variant}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

export default Button;