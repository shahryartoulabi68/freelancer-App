import React, { useEffect, useRef } from 'react'
import useOutsideClick from '../assets/Hooks/useOutsideClick'
import { HiCursorClick, HiLockClosed, HiOutlineLockClosed } from 'react-icons/hi'
import useUser from '../features/authentication/useUser'
import { IoCloseSharp } from "react-icons/io5";

function MobailMenu({ children, onClose }) {

    const refSidebar = useRef()
    const { user } = useUser()
    const fitstName = user.name.split("")

    useOutsideClick(refSidebar, onClose)
    return (
        <div className=' fixed top-0
     left-0 z-50 w-full h-screen bg-secondary-800 bg-opacity-30 transition-all duration-500 ease-in-out '>
            <div ref={refSidebar} className='bg-secondary-0 h-screen absolute flex flex-col justify-between
            transition-all duration-500 ease-in-out top-0 z-40 right-0 w-2/3'>
                <div className=' flex items-start flex-col w-full'>
                    <div className='flex items-center justify-between px-6 pt-6 pb-2 w-full border-b mb-4'>
                        <h1 className='text-primary-900 font-black'>فریلنسر اپ</h1>
                        <span className='text-sm text-secondary-700' onClick={onClose}><IoCloseSharp className='w-5 h-5'/></span>
                    </div>
                    <ul className='w-full flex flex-col gap-2 p-4'>
                        {children}
                    </ul>
                </div>
                <div className='grid grid-rows-2 gap-x-2 grid-cols-[2.4rem_1fr] p-4'>
                    <span className='bg-secondary-400  flex items-center justify-center row-span-2
                        rounded-full text-secondary-0 border ring-1 ring-secondary-300'>{fitstName[0]}</span>
                    <span className='text-sm text-secondary-400'>{user?.name}</span>
                    <span className='text-sm text-secondary-700'>{user?.role}</span>
                </div>
            </div>
        </div>
    )
}

export default MobailMenu
