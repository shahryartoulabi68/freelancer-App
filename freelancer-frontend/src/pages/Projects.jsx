import React, { useState } from 'react'
import ProjectTable from '../features/projects/ProjectTable'
import ProjectTableV from '../features/projects/ProjectTable-V'
import Modal from '../ui/Modal'
import CreateProjectForm from '../features/projects/CreateProjectForm'

function Projects() {

  const [addProject, setAddProject] = useState(false)

  return (
    <div >
      < div className='flex items-center justify-between mb-4' >
        <h2 className='text-lg md:text-xl font-bold text-secondary-900'>پروژه های شما</h2>
        <button onClick={() => setAddProject(true)} className='btn btn--primary whitespace-nowrap'>اضافه کردن پروژه</button>
        <Modal open={addProject} title={`اضافه کردن پروژه`} onClose={() => setAddProject(false)}>
          <CreateProjectForm onClose={() => setAddProject(false)} />
        </Modal>
      </div >
      <ProjectTableV />
    </div>
  )
}

export default Projects
