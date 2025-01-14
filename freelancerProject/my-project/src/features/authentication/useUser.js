import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getUser } from '../../services/authService'

function useUser() {

    const { data, isLoading } = useQuery({
        queryKey: ["user"],
        queryFn: getUser,
        retry: false
    })
    const { user} = data || {}
    return { user, isLoading }
}

export default useUser
