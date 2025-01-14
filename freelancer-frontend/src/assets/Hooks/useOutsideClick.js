import React, { useEffect } from 'react'

export default function useOutsideClick(ref,onClose) {
    return (
        useEffect(() => {
            function handleDelete(e) {
                if (ref.current && !ref.current.contains(e.target)) {
                    onClose()
                }

            }
            document.addEventListener("click", handleDelete, true)
            return () => document.removeEventListener("click", handleDelete, true)
        }, [])
    )
}

