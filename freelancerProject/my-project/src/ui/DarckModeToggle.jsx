import React from 'react'
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi'
import { useDarkMode } from '../context/DarkModeContext'

function DarckModeToggle() {

    const { isDarkMode, toggleDarkMode } = useDarkMode()
    return (
        <button onClick={toggleDarkMode}>
            {isDarkMode ? (
                <HiOutlineSun className='w-4 h-4 md:w-5 md:h-5 text-primary-900' />

            ) : (
                < HiOutlineMoon className='w-4 h-4 md:w-5 md:h-5 text-primary-900' />
            )

            }
        </button>
    )
}

export default DarckModeToggle
