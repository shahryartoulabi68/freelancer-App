import useProjects from '../../../assets/Hooks/useProjects';
import Table from '../../../ui/Table';
import ProjectRow from './ProjectRow'



function ProjectTable() {
    const { isLoading, projects } = useProjects()

    if (isLoading) return <p>در حال بارگذاری ....</p>
    if (!projects.length) return <p>پروژه ای وجد ندارد</p>;

    return (
        <Table>
            <Table.Headr>
                <th className='w-auto p-2 text-secondary-700'>#</th>
                <th className='w-auto p-2 text-secondary-700'>عنوان پروژه</th>
                <th className='w-auto p-2 text-secondary-700'>بودجه</th>
                <th className='w-auto p-2 text-secondary-700'>ددلاین</th>
                <th className='w-auto p-2 text-secondary-700'>وضعیت</th>
                <th className='w-auto p-2 text-secondary-700'>عملیات</th>
            </Table.Headr>
            <Table.body>
                {projects.map((project, index) => <ProjectRow key={project._id} project={project} index={index} />)
                }
            </Table.body>

        </Table>

    )
}

export default ProjectTable
