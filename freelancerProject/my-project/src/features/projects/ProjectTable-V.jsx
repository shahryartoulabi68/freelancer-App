import React, { useState } from 'react'
import useOwnerProjects from './useOwnerProjects'
import Modal from '../../ui/Modal';
import CreateProjectForm from './CreateProjectForm';
import ProjectRow from './ProjectRow';
import Table from '../../ui/Table';

function ProjectTableV() {
    const { isLoading, projects } = useOwnerProjects()



    if (isLoading) return <p>در حال بارگذاری ....</p>
    if (!projects.length) return <p>پروژه ای وجد ندارد</p>;

    return (
        <Table>
            <Table.Headr>
                <th className='w-auto p-2 text-secondary-700'>#</th>
                <th className='w-auto p-2 text-secondary-700'>عنوان پروژه</th>
                <th className='w-auto p-2 text-secondary-700'>دسته بندی</th>
                <th className='w-auto p-2 text-secondary-700'>بودجه</th>
                <th className='w-auto p-2 text-secondary-700'>ددلاین</th>
                <th className='w-auto p-2 text-secondary-700'>تگ ها </th>
                <th className='w-auto p-2 text-secondary-700'>فریلنسر</th>
                <th className='w-auto p-2 text-secondary-700'>وضعیت</th>
                <th className='w-auto p-2 text-secondary-700'>عملیات</th>
                <th className='w-auto p-2 text-secondary-700'>درخواست ها</th>
            </Table.Headr>
            <Table.body>
                {projects.map((project, index) => <ProjectRow key={project._id} project={project} index={index} />)
                }
            </Table.body>

        </Table>

    )

}

export default ProjectTableV



{/* < div className='flex items-center justify-between mb-4' >
            <h2 className='text-xl font-bold text-secondary-900'>پروژه های شما</h2>
            <button onClick={() => setAddProject(true)} className='btn btn--primary'>اضافه کردن پروژه</button>
            <Modal open={addProject} title={`اضافه کردن پروژه`} onClose={() => setAddProject(false)}>
                <CreateProjectForm onClose={() => setAddProject(false)} />
            </Modal>
        </div > */}