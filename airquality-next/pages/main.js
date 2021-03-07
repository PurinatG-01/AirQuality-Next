import React, { useState, useEffect } from 'react'
import useUsers from '../components/hooks/useUsers'
import PageLayout2 from '../components/PageLayout2'
import DashboardIcon from "@material-ui/icons/Dashboard";
import InfoIcon from "@material-ui/icons/Info"
import TimelineIcon from '@material-ui/icons/Timeline';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import RouterIcon from '@material-ui/icons/Router';
import PageNotFound from '../components/PageNotFound'

// Routing page components
import Overview from '../components/Overview';
import AboutUs from '../components/AboutUs'
import LiveData from "../components/LiveData"
import Information from "../components/Information"
import Devices from "../components/Devices"

const Icon = (icon) => {
    return (icon ?? <></>)
}

export default function main() {
    const PAGE = [
        { icon: Icon(DashboardIcon), tag: "Overview" },
        { icon: Icon(InfoIcon), tag: "About us" },
        { icon: Icon(TimelineIcon), tag: "Live data" },
        { icon: Icon(ImportContactsIcon), tag: "Information" },
        { icon: Icon(RouterIcon), tag: "Device" },
    ]

    const { isLoggedIn, user, userData } = useUsers()
    const [page, setPage] = useState(PAGE[0].tag)

    const RenderComponentPage = [
        { tag: "Overview", component: <Overview PAGE={PAGE} setPage={setPage}>Dashboard</Overview> },
        { tag: "About us", component: <AboutUs>About us</AboutUs> },
        { tag: "Live data", component: <LiveData PAGE={PAGE} setPage={setPage}>Live data</LiveData> },
        { tag: "Information", component: <Information>Information</Information> },
        { tag: "Device", component: <Devices>Device</Devices> },
    ]

    const [currentComponent, setCurrentComponent] = useState(RenderComponentPage[0])

    useEffect(() => {
        setCurrentComponent(RenderComponentPage.find((el) => el.tag == page))
    }, [page])

    return (
        <>
            { isLoggedIn ?
                <PageLayout2 PAGE={PAGE} setPage={setPage} >
                    {currentComponent?.component ?? <>Loading...</>}
                </PageLayout2>
                :
                <PageNotFound />
            }

        </>
    )
}
