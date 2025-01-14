import React from 'react'
import Stats from './Stats'
import useOwnerProjects from '../projects/useOwnerProjects'
import DashboardHeader from '../../ui/DashboardHeader'

function DashboardLayout() {
    const { isLoading, projects } = useOwnerProjects()
    if (isLoading) return <p className='text-secondary-600'> در حال دریافت اطلاعات شما...</p>
    return (
        <div>
            <DashboardHeader />
            <Stats projects={projects} />
        </div>
    )
}

export default DashboardLayout
