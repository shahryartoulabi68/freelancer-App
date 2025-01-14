import React, { useState } from 'react'
import useUser from '../features/authentication/useUser'
import UserAvatar from '../features/authentication/UserAvatar'
import HeaderMenu from './HeaderMenu'
import { HiMenu } from 'react-icons/hi'
import MobailMenu from './MobailMenu'

function Header({ children,open,setOpen }) {
    const { user, isLoading } = useUser()
    return (
        <div className='bg-secondary-0 py-4 px-4 md:px-8 border-b border-secondary-200'>
            <div className={`container xl:max-w-screen-lg flex gap-x-8 items-center justify-between md:justify-end
            ${isLoading ? "blur-sm" : ""}`}>
                <div className='md:hidden'>
                    <HiMenu className='w-5 h-5 text-primary-900' onClick={() => setOpen(!open)} />
                    {open ? <div>{children}</div> : ""}
                </div>
                <div className='flex items-center gap-x-2'>
                    <UserAvatar />
                    <HeaderMenu />
                </div>

            </div>
        </div>
    )
}

export default Header
