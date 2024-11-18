import { useState } from "react";

const useDarkMode = () => {

    const [dark, setDark] = useState(localStorage.getItem('dark') !== 'light')

    const toggleDark = () => {
        setDark(!dark)
        localStorage.setItem('dark', dark ? 'light' : 'dark')
    }

    return {
        dark,
        toggleDark
    };
};

export default useDarkMode;