import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const DarkMode: React.FC = () => {
    const [ isDarkMode, setDarkMode ] = useState<boolean>(Boolean(localStorage.getItem("dark")));

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("dark", String(true));
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.removeItem("dark");
        }
        
    }, [ isDarkMode ]);

    return (
        <div
            className="text-2xl text-text dark:text-dark-text"
            onClick={() => setDarkMode((prev: boolean) => !prev)}
        >
            {!isDarkMode ? <MdDarkMode /> : <MdLightMode />}
        </div>
    )
}

export default DarkMode;