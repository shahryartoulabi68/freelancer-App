import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { Navigate, Route, Routes } from "react-router-dom"
import Auth from './pages/Auth'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import CompleteProfaile from './pages/CompleteProfaile'
import Home from './features/authentication/Home'
import NotFound from './features/authentication/NotFound'
import AppLayout from './ui/AppLayout'
import OwnerDashboard from './pages/OwnerDashboard'
import Projects from './pages/Projects'
import Project from './pages/Project'
import DarkModeProvider from './context/DarkModeContext'
import OwnerLayoute from './features/owner/OwnerLayoute'
import FreelanserDashboard from './pages/FreelanserDashboard'
import Proposals from './pages/Proposals'
import SubmittedProjects from './pages/SubmittedProjects'
import FreelanserLayoute from './features/freelanser/FreelanserLayoute'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import ProtectedRoute from './ui/ProtectedRoute'
import AdminLayoute from './features/admin/AdminLayoute'
import AdminDashboard from './pages/AdminDashboard'
import Users from './pages/Users'
import Category from './features/admin/Category'

const queryClient = new QueryClient()

function App() {

  return (<div className=''>
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        <Toaster />
        <Routes>
          <Route path='/auth' element={<Auth />} />
          <Route path='/complete-profile' element={<CompleteProfaile />} />
          <Route path='/owner' element={<ProtectedRoute>
            <OwnerLayoute />
          </ProtectedRoute>}>
            <Route index element={<Navigate to={"dashboard"} replace />} />
            <Route path='dashboard' element={<OwnerDashboard />} />
            <Route path='projects' element={<Projects />} />
            <Route path='projects/:id' element={<Project />} />
          </Route>
          <Route path='/freelancer' element={<ProtectedRoute>
            <FreelanserLayoute />
          </ProtectedRoute>}>
            <Route index element={<Navigate to={"dashboard"} replace />} />
            <Route path="dashboard" element={<FreelanserDashboard />} />
            <Route path='proposals' element={<Proposals />} />
            <Route path='projects' element={<SubmittedProjects />} />
          </Route>

          <Route path='/admin' element={<ProtectedRoute>
            <AdminLayoute />
          </ProtectedRoute>}>
            <Route index element={<Navigate to={"dashboard"} replace />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="users" element={<Users />} />
            <Route path='proposals' element={<Proposals />} />
            <Route path='projects' element={<SubmittedProjects />} />
            <Route path='category' element={<Category />} />
          </Route>

          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </QueryClientProvider>
    </DarkModeProvider>
  </div>

  )
}

export default App
