import React from 'react'
import { HiOutlineLogout } from 'react-icons/hi'
import useLogout from './useLogout'

function Logout() {
    const { isPending, logout } = useLogout()


    return (isPending ? (<p>در حال خارج شدن...</p>) : (
        <button onClick={logout}>
            <HiOutlineLogout className='w-5 h-5 text-secondary-600 hover:text-error' />
        </button>
    )
    )


}

export default Logout
