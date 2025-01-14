import React from 'react'
import useProposals from './useProposals'
import Table from '../../ui/Table';
import ProposalRow from './ProposalRow';

function ProposalTable() {
    const { isLoading, proposals } = useProposals()

    if (isLoading) return <p>در حال بارگذاری ....</p>
    if (!proposals.length) return <p>پروژه ای وجد ندارد</p>;

    return (
        <Table>
            <Table.Headr>
                <th className='w-auto p-2 text-secondary-700'>#</th>
                <th className='w-auto p-2 text-secondary-700'>توضیحات</th>
                <th className='w-auto p-2 text-secondary-700'>زمان تحویل</th>
                <th className='w-auto p-2 text-secondary-700'>هزینه</th>
                <th className='w-auto p-2 text-secondary-700'>وضعیت</th>
            </Table.Headr>
            <Table.body>
                {proposals.map((proposal, index) => <ProposalRow key={proposal._id} proposal={proposal} index={index} />)
                }
            </Table.body>

        </Table>

    )
}

export default ProposalTable
