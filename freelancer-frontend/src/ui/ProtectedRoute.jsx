import React, { useEffect } from 'react'
import useAuthorize from '../features/authentication/useAuthorize'
import { useNavigate } from 'react-router-dom'

function ProtectedRoute({ children }) {

  const navigate = useNavigate()
  const { isAuthorized, isAuthenticated, isLoading, user, isverified } = useAuthorize()

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/Auth")
    if (!isAuthorized && !isLoading) navigate("/not-access")
    if (!isverified && !isLoading) navigate("/not-access")
  }, [isAuthenticated, isAuthorized, isLoading, navigate])

  if (isLoading) {
    return <div className='flex items-center justify-center h-screen bg-secondary-100'>
      <p className='text-secondary-800 font-bold text-lg'>درحال بارگذاری</p>
    </div>
  }


  if (isAuthenticated, isAuthorized) return children
}

export default ProtectedRoute
