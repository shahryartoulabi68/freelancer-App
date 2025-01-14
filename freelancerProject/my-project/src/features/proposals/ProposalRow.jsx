import React from 'react'
import Table from '../../ui/Table'
import { persianNumber } from '../../utils/persianNumber'


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
    return (
        <Table.Row key={proposal._id} className='bg-secondary-0 border-b rounded-xl'>
            <td className='w-auto text-center p-2 text-secondary-600'>{index + 1}</td>
            <td className='w-auto text-center p-2 text-secondary-600'>{proposal.description}</td>
            <td className='w-auto text-center p-2 text-secondary-600'>{proposal.duration}</td>
            <td className='w-auto text-center p-2 text-secondary-600'>{persianNumber(proposal.price)}</td>
            <td className='w-auto text-center p-2 text-secondary-600'>
            <span className={`badge ${statusStyle[proposal.status].className}`}>{statusStyle[proposal.status].label}</span>
            </td>
        </Table.Row>
    )
}

export default ProposalRow
