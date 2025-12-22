import { NavLink } from "react-router-dom";

const Module: React.FC<{
    /** Label */
    label: string;
    /** Icon */
    Icon?: React.ReactNode;
    /** Href */
    to?: string;
    /** Description */
    description?: string;
}> = ({
    label,
    Icon,
    to,
    description
}) => {
    return (
        <NavLink
            to={to}
            target="_blank"
            onClick={e => {
                if (!to)
                    e.preventDefault();
            }}
        >
            <div className="inline-flex flex-col gap-2 items-center justify-center border border-outline dark:border-dark-outline p-4 rounded-2xl text-text dark:text-dark-text bg-block dark:bg-dark-block">
                {Icon && Icon}
                <p className="text-xl">{label}</p>
                <p className="font-light text-md">{description}</p>
            </div>
        </NavLink>
    );
}

export default Module;