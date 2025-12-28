import { changeDocMode, switcher } from "@/stores/darkmode";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const DarkMode: React.FC = () => {
    const dispatch = useDispatch();
    const isDarkMode = useSelector((state: any) => state?.darkMode?.isDarkMode);
    
    changeDocMode(isDarkMode);

    return (
        <div
            className="text-2xl text-text dark:text-dark-text"
            onClick={() => dispatch(switcher())}
        >
            {isDarkMode ? <MdDarkMode /> : <MdLightMode />}
        </div>
    )
}

export default DarkMode;