import { useEffect } from "react";
import { useState } from "react";

export default function useLocalStorage(key, initioalstate) {
    const [value, setValue] = useState(() => {
        const storedValue = localStorage.getItem(key) || null
        return storedValue ? JSON.parse(storedValue) : initioalstate
    })


    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])
    return [value, setValue]
}