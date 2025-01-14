import { useState } from 'react';
import Table from '../../ui/Table'
import useRemoveProject from './useRemovProject';
import { persianNumber } from '../../utils/persianNumber';
import toLocaleShort from '../../utils/toLocaleShort';
import { TbPencilMinus } from 'react-icons/tb';
import CreateProjectForm from './CreateProjectForm';
import Modal from '../../ui/Modal';
import { HiEye, HiOutlineTrash } from 'react-icons/hi';
import ConfirmDelete from '../../ui/ConfirmDelete';
import ToggleProjectStatus from './ToggleProjectStatus';
import { Link } from 'react-router-dom';


function ProjectRow({ project, index }) {

    const { isDeleting, removeProject } = useRemoveProject();
    const [editOpen, setEditOpen] = useState(false)
    const [deleteOpen, setDeleteOpen] = useState(false)
    return (
        <Table.Row key={project._id} className='bg-secondary-0 border-b rounded-xl'>
            <td className='w-auto text-center p-2 text-secondary-600'>{index + 1}</td>
            <td className='w-auto text-center p-2 text-secondary-600'>{project.title}</td>
            <td className='w-auto text-center p-2 text-secondary-600'>{project.category.title}</td>
            <td className='w-auto text-center p-2 text-secondary-600'>{persianNumber(project.budget)}</td>
            <td className='w-auto text-center p-2 text-secondary-600'>{toLocaleShort(project.deadline)}</td>
            <td className='w-auto text-center p-2 text-secondary-600'>
                {project.tags.map((tage) => <span className='badge badge--secondary' key={tage}>{tage}</span>)}
            </td>
            <td className='w-auto text-center p-2 text-secondary-600'>{project.freelancer?.name || "-"}</td>
            <td className='w-auto text-center p-2 text-secondary-600'>
                <ToggleProjectStatus project={project} />
            </td>
            <td className='w-auto text-center p-2 text-secondary-600'>
                <div className='flex items-center gap-4'>
                    <>
                        <button onClick={() => setEditOpen(true)}>
                            <TbPencilMinus className='w-5 h-5 text-primary-900' />
                        </button>
                        <Modal open={editOpen} title={`ویرایش ${project.title}`} onClose={() => setEditOpen(false)}>
                            <CreateProjectForm onClose={() => setEditOpen(false)} projectToEdit={project} />
                        </Modal>
                    </>
                    <>
                        <button onClick={() => setDeleteOpen(true)} >
                            <HiOutlineTrash className='w-5 h-5 text-error' />
                        </button>
                        <Modal open={deleteOpen} title={`حذف ${project.title}`} onClose={() => setDeleteOpen(false)}>
                            <ConfirmDelete projectName={project.title}
                                onConfirm={() => removeProject(project._id, {
                                    onSuccess: (data) => setDeleteOpen(false)
                                })}
                                disabled={false}
                                onClose={() => setDeleteOpen(false)} />
                        </Modal>
                    </>
                </div>
            </td>
            <td className='w-auto text-center p-2 text-secondary-600'>
                <Link to={project._id} className='flex justify-center'>
                    <HiEye className='w-5 h-5 text-primary-800' />
                </Link>
            </td>
        </Table.Row>
    )
}

export default ProjectRow
