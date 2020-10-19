import React, {useEffect} from 'react'
import useUsers from '../components/hooks/useUsers'
import { useRouter } from 'next/router'
import PageLayout2 from '../components/PageLayout2'
import Dashboard from '../components/Dashboard'

export default function main() {

    const router = useRouter()
    const { isLoggedIn } = useUsers()

    return (
        <>
            { isLoggedIn ? <PageLayout2>Dashboard</PageLayout2>: <>No Permission Na !! </> } 
            
        </>
    )
}
