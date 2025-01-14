import React, { useState } from 'react'
import useOwnerProjects from './useOwnerProjects'
import toLocaleShort from '../../utils/toLocaleShort';
import { TbPencilMinus } from 'react-icons/tb';
import { HiOutlineTrash } from 'react-icons/hi';
import { persianNumber } from '../../utils/persianNumber';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';
import useRemoveProject from './useRemovProject';
import CreateProjectForm from './CreateProjectForm';

function ProjectTable() {
    const { isLoading, projects } = useOwnerProjects()

    const { isDeleting, removeProject } = useRemoveProject();


    const [editOpen, setEditOpen] = useState(false)
    const [deleteOpen, setDeleteOpen] = useState(false)
    const [addProject, setAddProject] = useState(false)


    if (isLoading) return <p>در حال بارگذاری ....</p>
    if (!projects.length) return <p>پروژه ای وجد ندارد</p>;

    return (
        <div className='w-full overflow-x-auto'>

            < div className='flex items-center justify-between mb-4' >
                <h2 className='text-xl font-bold text-secondary-900'>پروژه های شما</h2>
                <button onClick={() => setAddProject(true)} className='btn btn--primary'>اضافه کردن پروژه</button>
                <Modal open={addProject} title={`اضافه کردن پروژه`} onClose={() => setAddProject(false)}>
                    <CreateProjectForm onClose={() => setAddProject(false)} />
                </Modal>
            </div >


            <table className='border-gray-200-100 bg-red-100 w-full'>
                <thead className='border-gray-300'>
                    <tr className='border-gray-300 border '>
                        <th className='w-auto p-2'>#</th>
                        <th className='w-auto p-2'>عنوان پروژه</th>
                        <th className='w-auto p-2'>دسته بندی</th>
                        <th className='w-auto p-2'>بودجه</th>
                        <th className='w-auto p-2'>ددلاین</th>
                        <th className='w-auto p-2'>تگ ها </th>
                        <th className='w-auto p-2'>فریلنسر</th>
                        <th className='w-auto p-2'>وضعیت</th>
                        <th className='w-auto p-2'>عملیات</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        projects.map((project, index) => (<tr key={project._id} className='bg-white border-b rounded-xl'>
                            <td className='w-auto text-center p-2'>{index + 1}</td>
                            <td className='w-auto text-center p-2'>{project.title}</td>
                            <td className='w-auto text-center p-2'>{project.category.title}</td>
                            <td className='w-auto text-center p-2'>{persianNumber(project.budget)}</td>
                            <td className='w-auto text-center p-2'>{toLocaleShort(project.deadline)}</td>
                            <td className='w-auto text-center p-2'>{project.tags.join("-")}</td>
                            <td className='w-auto text-center p-2'>{project.freelancer?.name || "-"}</td>
                            <td className='w-auto text-center p-2'>
                                {project.status === "OPEN"
                                    ? (<span>باز</span>)
                                    : (<span>بسته</span>)
                                }
                            </td>
                            <td className='w-auto text-center p-2'>
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
                        </tr>))
                    }
                </tbody>
            </table>
        </div>
    )

}

export default ProjectTable



// {
//     "title":"پروژه اول",
//     "description":"توضیحات پروژه اول",
//     "tags":["فرانت اند","برنامه نویسی"],
//     "category":"",
//     "budget":"300000",
//     "deadline":"'2024-12-10T09:26:39.743Z'"
// }