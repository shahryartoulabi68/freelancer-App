import React from 'react'
import { HiArrowRight } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

function ProjectHeadr({ project }) {

  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1)
  }

  return (
    <div className='flex items-center gap-4'>
      <button onClick={goBack} >
        <HiArrowRight className='w-6 h-6 text-secondary-500' />
      </button>
      < h1 className='text-secondary-700 font-black text-xl'>
        لیست درخواست های پروژه {project.title}
      </h1>
    </div>
  )
}

export default ProjectHeadr
