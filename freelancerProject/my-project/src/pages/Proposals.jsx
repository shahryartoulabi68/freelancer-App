import React from 'react'
import ProposalTable from '../features/proposals/proposalTable'
function Proposals() {
    return (
        <div>
            <h1 className='font-black text-secondary-700 text-xl mb-8'>لیست پروپوزال ها</h1>
            <ProposalTable />
        </div>
    )
}

export default Proposals
