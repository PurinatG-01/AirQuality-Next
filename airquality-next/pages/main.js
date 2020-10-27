import React, { useState,useEffect } from 'react'
import useUsers from '../components/hooks/useUsers'
import PageLayout2 from '../components/PageLayout2'
import DashboardIcon from "@material-ui/icons/Dashboard";
import InfoIcon from "@material-ui/icons/Info"
import TimelineIcon from '@material-ui/icons/Timeline';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import RouterIcon from '@material-ui/icons/Router';

import {useAirData2} from "../components/hooks/useAirData"

const Icon = (icon)=>{
    return (icon ?? <></>)
}

const PAGE = [
    { icon: Icon(DashboardIcon),tag: "Dashboard" }, 
    { icon: Icon(InfoIcon),tag: "About us" }, 
    { icon: Icon(TimelineIcon),tag: "Live data" },
    { icon: Icon(ImportContactsIcon),tag: "Information" }, 
    { icon: Icon(RouterIcon),tag: "Device" },
]

const RenderComponentPage = [
    {tag: "Dashboard", component: <>Dashboard</>},
    {tag: "About us", component: <>About us</>},
    {tag: "Live data", component: <>Live data</>},
    {tag: "Information", component: <>Information</>},
    {tag: "Device", component: <>Device</>},
]




export default function main() {

    const { isLoggedIn,user,userData } = useUsers()
    const [page, setPage] = useState(PAGE[0].tag)
    const [currentComponent, setCurrentComponent] = useState(RenderComponentPage[0])
    
    const airdata = useAirData2()

    useEffect(()=>{
        setCurrentComponent(RenderComponentPage.find((el)=> el.tag == page))
    },[page])

    return (
        <>
            { isLoggedIn ?
                <PageLayout2 PAGE={PAGE} setPage={setPage} >
                   { currentComponent?.component ?? <>Loading...</>}
                </PageLayout2>
                :
                <>No Permission Na !! </>}
            {console.dir(airdata)}
            
        </>
    )
}
