import React from 'react'
import useMoveBack from '../../assets/Hooks/useMoveBack'

function NotFound() {
    const moveBack = useMoveBack()

    return (
        <div className='container xl:max-w-screen-xl bg-secondary-0 h-screen w-full'>
            <div className='sm:max-w-sm flex justify-center pt-10 '>
                <div>
                    <h1 className='text-xl font-bold text-secondary-700'>
                        صفحه ای که دنبالش هستید پیدا نشد
                    </h1>
                    <button onClick={moveBack} className='text-secondary-900'>برگشت</button>
                </div>

            </div>
        </div>
    )
}

export default NotFound
