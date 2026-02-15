import "./container.css";

/**
 * Basic container
 * @example
 * return <Container />
*/
const Container: React.FC<{
    children: React.ReactNode;
}> = ({
    children
}) => {
    return (
        <div className="container flex flex-col gap-4 w-full">
            {children}
        </div>
    );
}

export default Container;