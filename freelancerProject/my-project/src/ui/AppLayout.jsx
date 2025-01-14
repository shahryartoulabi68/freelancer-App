import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import MobailMenu from './MobailMenu'

function AppLayout({ children }) {

    return (
        <div className='grid h-screen grid-rows-[auto_1fr] grid-cols-1 md:grid-cols-[12rem_1fr] lg:grid-cols-[15rem_1fr] blur-0'>
            {children}
            <div className='bg-secondary-100 p-4 md:p-8 overflow-y-auto' >
                <div className='mx-auto max-w-screen-lg '>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default AppLayout
