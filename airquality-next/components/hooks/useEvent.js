import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { data_server_address } from '../variable'


const getEvents = async (devices) => {
    let devicesStr = ''
    devices.forEach((device, index) => {
        devicesStr += device.key
        if (index != devices.length - 1)
            devicesStr += ','
    })
    return await axios.get(`http://${data_server_address}:8081/api/airdata/event/getByMultipleDeviceIds?devices=${devicesStr}`)
}

export default function useEvent() {
    const [devices, setDevices] = useState([])
    const [events, setEvents] = useState([])

    useEffect(() => {
        getEvents(devices)
            .then((response) => {
                setEvents(response.data)
            }).catch((error) => {
                console.log("> error : ", error)
            })
    }, [devices])

    return { setDevices, events }
}
