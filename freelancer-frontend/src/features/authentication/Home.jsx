import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
  // const navigate = useNavigate()
  return (
    <div className='container xl:max-w-screen-xl bg-secondary-0 h-screen p-10 text-center'>
      <h1 className='text-secondary-800'>خوش آمدید</h1>
      <Link to={"auth"}>
        برای ثبت نام اینجا کلیک کنید
      </Link>

    </div>
  )
}

export default Home
