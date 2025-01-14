import React from 'react'
import { BiLandscape, BiLoader, BiLoaderAlt, BiLoaderCircle } from 'react-icons/bi'

function Loading() {
    return <div className='flex justify-center items-center text-primary-700'>
        <span>در حال ارسال کد ...</span>
        <BiLoaderCircle />
    </div>
}

export default Loading
