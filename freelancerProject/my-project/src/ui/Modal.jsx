import React, { useEffect, useRef } from 'react'
import { HiOutlineX } from 'react-icons/hi'
import useOutsideClick from '../assets/Hooks/useOutsideClick'

function Modal({ open, onClose, title, children }) {
    const ref = useRef()
    useOutsideClick(ref,onClose)
    // useEffect(() => {
    //     function handleDelete(e) {
    //         if (ref.current && !ref.current.contains(e.target)) {
    //             onClose()
    //         }

    //     }
    //     document.addEventListener("click", handleDelete, true)
    //     return () => document.removeEventListener("click", handleDelete, true)
    // }, [])

    return (open && <div className='backdrop-blur-sm fixed top-0
     left-0 z-50 w-full h-screen bg-secondary-500 bg-opacity-30'>
        <div ref={ref} className='fixed top-1/2 left-1/2 -translate-x-1/2 
        -translate-y-1/2 bg-secondary-0 rounded-lg p-4 transition-all
        shadow-lg duration-500 ease-in-out 
        w-[calc(100vw-3rem)] md:max-w-md max-h-[calc(100vh-2rem)] overflow-y-auto'>

            <div className='flex items-center justify-between border-b border-b-secondary-300 pb-2 mb-4'>
                <span className='text-secondary-700 font-bold text-base'>{title}</span>
                <HiOutlineX onClick={onClose} className='w-5 h-5 text-red-700 ' />
            </div>
            {children}

        </div>

    </div>

    )
}

export default Modal
