import React from 'react'
import SentOTPform from '../features/authentication/SentOTPform'
import CheckOTPform from '../features/authentication/CheckOTPform'
import Authcontainer from '../features/authentication/Authcontainer'

function Auth() {
    return (
        <div className='container xl:max-w-screen-xl bg-secondary-0 h-screen w-screen' >

            <div className='flex justify-center p-10'>
                <div className='w-full sm:max-w-sm'>
                    <Authcontainer />
                </div>
            </div>
        </div>

    )
}

export default Auth
