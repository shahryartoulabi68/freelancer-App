import React from 'react'
import { HiOutlineLogin, HiOutlineUser } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import DarckModeToggle from './DarckModeToggle'
import Logout from '../features/authentication/LogOut'

function HeaderMenu() {
    return (
        <ul className='flex  gap-x-4'>
            <li>
                <Link to={"dashboard"}>
                    <HiOutlineUser className='w-4 h-4' />
                </Link>
            </li>
            <li >
                <DarckModeToggle />
            </li>
            <li className='hidden md:block'>
                <Logout />
            </li>
        </ul>
    )
}

export default HeaderMenu
