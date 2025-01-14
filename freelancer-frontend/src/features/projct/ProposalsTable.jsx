import Table from '../../ui/Table';
import ProposalRow from './ProposalRow';


function ProposalsTable({ proposals }) {

    return <div>
        <Table>
            <Table.Headr>
                <th className='w-auto p-2'>#</th>
                <th className='w-auto p-2'>فریلنسر</th>
                <th className='w-auto p-2'>توضیحات</th>
                <th className='w-auto p-2'>زمان تحویل</th>
                <th className='w-auto p-2'>هزینه</th>
                <th className='w-auto p-2'>وضعیت</th>
                <th className='w-auto p-2'>عملیات</th>
            </Table.Headr>
            <Table.body>
                {proposals.map((proposal, index) => <ProposalRow key={proposal._id} proposal={proposal} index={index} />)
                }
            </Table.body>

        </Table>

    </div>
}

export default ProposalsTable
