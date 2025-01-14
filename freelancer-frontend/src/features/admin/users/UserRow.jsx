import React, { useState } from 'react'
import Table from '../../../ui/Table'
import { persianNumber } from '../../../utils/persianNumber'
import toLocaleShort from '../../../utils/toLocaleShort'
import Modal from '../../../ui/Modal'
import ChangeProposalStatus from '../../projct/ChangeProposalStatus'
import ChangeUserStatus from './changeUserStatus'


const statusStyle = [
    {
        label: "رد شده",
        className: "badge--danger"
    },
    {
        label: "درانتظار تایید",
        className: "badge--secondary"
    },
    {
        label: "تایید شده",
        className: "badge--success"
    }
]


function UserRow({ user, index }) {
    const [open, setOpen] = useState(false)
    const { status } = user

    return (
        <Table.Row key={user._id} className='bg-secondary-0 border-b rounded-xl'>
            <td className='w-auto text-center p-2 text-secondary-600'>{index + 1}</td>
            <td className='w-auto text-center p-2 text-secondary-600'>{user.name}</td>
            <td className='w-auto text-center p-2 text-secondary-600'>{user.email}</td>
            <td className='w-auto text-center p-2 text-secondary-600'>{user.phoneNumber}</td>
            <td className='w-auto text-center p-2 text-secondary-600'>{user.role}</td>

            <td className='w-auto text-center p-2'>
                <span className={`badge ${statusStyle[status].className}`}>{statusStyle[status].label}</span>
            </td>

            <td className=' w-auto text-center p-2'>
                <Modal onClose={() => setOpen(false)} open={open} title="تغییر وضعیت درخواست ها" >
                    <ChangeUserStatus userId={user._id} onClose={() => setOpen(false)} />
                </Modal>
                <button onClick={() => setOpen(true)} className='text-secondary-700'>تغییر وضعیت</button>
            </td>
        </Table.Row>
    )
}

export default UserRow
