import { IconType } from "react-icons";
import { NavLink } from "react-router-dom";

const Link: React.FC<{
    /** Label */
    label: string;
    /** Href */
    href: string;
    /** Icon */
    Icon?: IconType;
    /** Bordered */
    bordered?: boolean;
    /** Target */
    target?: React.HTMLAttributeAnchorTarget;
    /** Icon position */
    placement?: "left" | "right";
}> = ({
    label,
    href,
    Icon,
    bordered,
    target="_blank",
    placement="left"
}) => (
    <NavLink
        to={href}
        target={target}
        className={`inline-flex flex-row gap-2 items-center ${bordered && "border rounded-2xl px-4 py-2" || ""}`}
    >
        {(Icon && placement == "left") && <Icon />}
        {label}
        {(Icon && placement == "right") && <Icon />}
    </NavLink>
);

export default Link;