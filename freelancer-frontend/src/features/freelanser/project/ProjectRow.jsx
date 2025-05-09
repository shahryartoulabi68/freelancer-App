import { MdAssignmentAdd } from 'react-icons/md';
import Table from '../../../ui/Table';
import { persianNumber } from '../../../utils/persianNumber';
import toLocaleShort from '../../../utils/toLocaleShort';
import { useState } from 'react';
import Modal from "../../../ui/Modal"
import CreateProposal from '../../proposals/CreateProposal';

function ProjectRow({ project, index }) {


    const projectStatus = {
        OPEN: {
            label: "باز",
            className: "badge--success"
        },
        CLOSED: {
            label: "بسته",
            className: "badge--danger"
        }
    }

    const { status } = project;
    const [open, setOpen] = useState(false)

    return (
        <Table.Row key={project._id} className='bg-secondary-0 border-b rounded-xl'>
            <td className='w-auto text-center p-2 text-secondary-600'>{index + 1}</td>
            <td className='w-auto text-center p-2 text-secondary-600'>{project.title}</td>
            <td className='w-auto text-center p-2 text-secondary-600'>{persianNumber(project.budget)}</td>
            <td className='w-auto text-center p-2 text-secondary-600'>{toLocaleShort(project.deadline)}</td>
            <td className='w-auto text-center p-2 text-secondary-600'>
                <span className={`badge ${projectStatus[status].className}`}>{projectStatus[status].label}</span>
            </td>
            <td className='w-auto  p-2 text-secondary-600 flex  justify-center'>
                <Modal open={open} onClose={() => setOpen(false)} title={`درخواست انجام پروژه ${project.title}`}>
                    <CreateProposal onClose={() => setOpen(false)} projectId={project._id} />
                </Modal>
                <button onClick={() => setOpen(true)}>
                    <MdAssignmentAdd className='w-5 h-5 text-primary-900' />
                </button>
            </td>
        </Table.Row>
    )
}



export default ProjectRow
