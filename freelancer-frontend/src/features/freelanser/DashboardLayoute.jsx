import React from 'react'
import Stats from './Stats'
import useOwnerProjects from '../projects/useOwnerProjects'
import useProposals from '../proposals/useProposals'
import DashboardHeader from '../../ui/DashboardHeader'

function DashboardLayout() {
    const { isLoading, proposals } = useProposals()
    if (isLoading) return <p className='text-secondary-600'> در حال دریافت اطلاعات شما...</p>
    return (
        <div>
            <DashboardHeader />
            <Stats proposals={proposals} />
        </div>
    )
}

export default DashboardLayout