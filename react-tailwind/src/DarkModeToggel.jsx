import { useEffect, useState } from "react";

function DarkModeToggle() {
    const [isDarkMode, setisDarkMode] = useState(
        () => {
            return localStorage.getItem('theme') === 'dark';
        }
    );

    useEffect( () => {
        if(isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        }
        // document.documentElement.classList.add('dark');
        // localStorage.setItem('theme', 'dark');
    }, [isDarkMode]);

    return (
        <button
        onClick={() => setisDarkMode(!isDarkMode)} // we are setting the dark and will reverse whatever is there in dark mode 
        className="p-2 dark:bg-gray-900 dark:text-white bg-gray-200 text-gray-800 rounded-lg">
            Dark Mode
        </button>
    );
}

export default DarkModeToggle;