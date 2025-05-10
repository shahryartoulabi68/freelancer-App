import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useUser from './useUser'

function Home() {
  const navigate = useNavigate()
  const { user } = useUser()
  useEffect(() => {
    if (user && user.role === 'ADMIN') navigate("/admin/dashboard", { replace: true })
    if (user && user.role === 'OWNER') navigate("/owner", { replace: true })
    if (user && user.role === 'FREELANCER') navigate("/freelancer", { replace: true })
  }, [user, navigate])
  return (
    <div className='container xl:max-w-screen-xl bg-secondary-0 h-screen p-10 text-center'>
      <h1 className='text-secondary-800'>خوش آمدید</h1>
      <p></p>
      <Link to={"auth"}>
        برای ثبت نام اینجا کلیک کنید
      </Link>

    </div>
  )
}

export default Home
