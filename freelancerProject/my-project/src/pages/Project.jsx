import React from 'react'
import useProject from '../features/projct/useProjct'
import ProjectHeadr from '../features/projct/ProjectHeadr'
import ProposalsTable from '../features/projct/ProposalsTable'
function Project() {
    const { isLoading, project } = useProject()

    if (isLoading) return <p>در حال بارگذاری...</p>

    return (
        <div className='space-y-4'>
            <ProjectHeadr project={project}/>
            <ProposalsTable proposals={project.proposals} />
        </div>
    )
}

export default Project
