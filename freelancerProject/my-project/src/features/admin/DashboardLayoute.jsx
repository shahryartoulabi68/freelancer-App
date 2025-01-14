import React from 'react'
import DashboardHeader from '../../ui/DashboardHeader'
import useProposals from '../proposals/useProposals'
import useProjects from '../../assets/Hooks/useProjects'
import useUsers from './useUsers'
import Stats from './Stats'

function DashboardLayoute() {
    const { isLoading, proposals } = useProposals()
    const { isLoading: isLoading1, projects } = useProjects()
    const { isLoading: isLoading2, users } = useUsers()
   

    if (isLoading && isLoading1 && isLoading2) return <p className='text-secondary-600'> در حال دریافت اطلاعات شما...</p>
    return (
        <div>
            <DashboardHeader />
            <Stats proposals={proposals} projects={projects} users={users} />
        </div>
    )
}

export default DashboardLayoute
