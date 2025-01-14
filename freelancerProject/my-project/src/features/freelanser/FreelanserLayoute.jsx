import React, { useState } from 'react'
import AppLayout from '../../ui/AppLayout'
import Sidebar from '../../ui/Sidebar'
import { NavLink } from 'react-router-dom'
import { HiCollection, HiHome } from 'react-icons/hi'
import Header from '../../ui/Header'
import MobailMenu from '../../ui/MobailMenu'

function FreelanserLayoute() {
    const navLinkClass = "flex  items-center gap-x-2 hover:bg-primary-100 p-2 rounded-md "
    const [open, setOpen] = useState(false)

    return (
        <AppLayout>
            <Header open={open} setOpen={setOpen}>
                <MobailMenu onClose={() => setOpen(false)} >
                    <li onClick={() => setOpen(false)}>
                        <NavLink to={"dashboard"}
                            className={({ isActive }) =>
                                isActive ?
                                    `${navLinkClass} bg-primary-100/50 text-primary-900`
                                    :
                                    `${navLinkClass} text-secondary-600`
                            }>
                            <HiHome />
                            <span>خانه</span>
                        </NavLink>
                    </li>
                    <li onClick={() => setOpen(false)}>
                        <NavLink to={"projects"}
                            className={({ isActive }) =>
                                isActive ?
                                    `${navLinkClass} bg-primary-100/80 text-primary-900`
                                    :
                                    `${navLinkClass} text-secondary-600`
                            }>
                            < HiCollection />
                            <span>پروژه ها</span>
                        </NavLink>
                    </li>
                    <li onClick={() => setOpen(false)}>
                        <NavLink to={"proposals"}
                            className={({ isActive }) =>
                                isActive ?
                                    `${navLinkClass} bg-primary-100/80 text-primary-900`
                                    :
                                    `${navLinkClass} text-secondary-600`
                            }>
                            < HiCollection />
                            <span>درخواست ها</span>
                        </NavLink>
                    </li>
                </MobailMenu>
            </Header>
            <Sidebar>
                <li>
                    <NavLink to={"dashboard"}
                        className={({ isActive }) =>
                            isActive ?
                                `${navLinkClass} bg-primary-100/50 text-primary-900`
                                :
                                `${navLinkClass} text-secondary-600`
                        }>
                        <HiHome />
                        <span>خانه</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"projects"}
                        className={({ isActive }) =>
                            isActive ?
                                `${navLinkClass} bg-primary-100/80 text-primary-900`
                                :
                                `${navLinkClass} text-secondary-600`
                        }>
                        < HiCollection />
                        <span>پروژه ها</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"proposals"}
                        className={({ isActive }) =>
                            isActive ?
                                `${navLinkClass} bg-primary-100/80 text-primary-900`
                                :
                                `${navLinkClass} text-secondary-600`
                        }>
                        < HiCollection />
                        <span>درخواست ها</span>
                    </NavLink>
                </li>
            </Sidebar>
        </AppLayout>
    )
}

export default FreelanserLayoute
