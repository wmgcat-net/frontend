import { NavLink } from "react-router-dom";
import Container from "./container";
import Button from "./button";

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
            <Button disabled={!to}>
                <div className="inline-flex flex-col gap-2 items-center justify-center">
                    {Icon && Icon}
                    <p className="text-xl">{label}</p>
                    <p className="font-light text-md">{description}</p>
                </div>
            </Button>
        </NavLink>
    );
}

export default Module;