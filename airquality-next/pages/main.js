import React, {useEffect} from 'react'
import useUsers from '../components/hooks/useUsers'
import { useRouter } from 'next/router'
import PageLayout from '../components/PageLayout'
import Dashboard from '../components/Dashboard'

export default function main() {

    const router = useRouter()
    const { isLoggedIn } = useUsers()

    

   

    return (
        <>
            { isLoggedIn ? <PageLayout>Dashboard</PageLayout>: <>No Permission Na !! </> } 
            
        </>
    )
}
