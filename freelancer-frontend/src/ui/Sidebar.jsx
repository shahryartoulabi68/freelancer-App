import React from 'react'
import { HiCollection, HiHome } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'

function Sidebar({ children }) {

    return (
        <div className='hidden md:block  bg-secondary-0 row-start-1 row-span-2 p-3'>
            <ul className='flex flex-col gap-4'>
                {children}
            </ul>
        </div >

    )
}

export default Sidebar
