import { useState } from 'react'
import Modal from '../../ui/Modal'
import Table from '../../ui/Table'
import ChangeProposalStatus from './ChangeProposalStatus'

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


function ProposalRow({ proposal, index }) {

    const [open, setOpen] = useState(false)

    return (
        <Table.Row key={proposal._id} className='bg-secondary-0 border-b rounded-xl'>
            <td className='w-auto text-center p-2'>{index + 1}</td>
            <td className='w-auto text-center p-2'>{proposal.user.name}</td>
            <td className='w-auto text-center p-2'>{proposal.description}</td>
            <td className='w-auto text-center p-2'>{proposal.duration}</td>
            <td className='w-auto text-center p-2'>{proposal.price}</td>
            <td className='w-auto text-center p-2'>
                <span className={`badge ${statusStyle[proposal.status].className}`}>{statusStyle[proposal.status].label}</span>
            </td>
            <td className=' w-auto text-center p-2'>
                <Modal onClose={() => setOpen(false)} open={open} title="تغییر وضعیت درخواست ها" >
                    <ChangeProposalStatus proposalId={proposal._id} onClose={() => setOpen(false)} />
                </Modal>
                <button onClick={() => setOpen(true)}>تغییر وضعیت</button>
            </td>
        </Table.Row>
    )
}

export default ProposalRow
