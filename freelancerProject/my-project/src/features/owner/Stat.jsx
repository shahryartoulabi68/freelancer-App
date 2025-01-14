import React from 'react'
import { FiDivideCircle } from 'react-icons/fi'

function Stat({ icon, value, title }) {
    return (
        <div className='grid col-span-1 grid-rows-2 grid-cols-[4.2rem_1fr] 
        lg:grid-cols-[6.4rem_1fr] bg-secondary-0 p-2 lg:p-4 rounded-lg gap-2'>
            <div className='bg-secondary-100 rounded-lg row-span-2 flex 
            items-center justify-center text-primary-700'>{icon}</div>
            <div className=' text-secondary-400 text-lg'>{title}</div>
            <div className='text-secondary-800 font-bold'> {value}</div>
        </div>
    )
}

export default Stat
