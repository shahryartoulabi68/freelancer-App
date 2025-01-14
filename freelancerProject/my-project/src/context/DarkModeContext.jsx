import { stringify } from "postcss"
import { createContext, useContext, useEffect, useState } from "react"
import useLocalStorage from "../assets/Hooks/useLocalStorageTate"

const DarkModeContext = createContext()
export default function DarkModeProvider({ children }) {

    const [isDarkMode, setIsDarkMode] = useLocalStorage("isDarkMode",
        window.matchMedia("(prefers-color-scheme:dark)").matches
    )

    const toggleDarkMode = () => setIsDarkMode((priv) => !priv)

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark-mode")
            document.documentElement.classList.remove("light-mode")
        }
        else {
            document.documentElement.classList.add("light-mode")
            document.documentElement.classList.remove("dark-mode")
        }
    }, [isDarkMode])

    return (
        < DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )
}


export function useDarkMode() {
    const context = useContext(DarkModeContext)
    if (context === undefined) throw new Error("outsid")
    return context
}