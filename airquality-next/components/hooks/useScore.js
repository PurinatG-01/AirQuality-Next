import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { data_server_address } from '../variable'

const getScore = async (authToken) => {
    return await axios.get(`http://${data_server_address}:8081/api/airdata/score/getByDeviceId/${authToken}`)
}

const getScores = async (devices) => {
    const requests = []
    devices.forEach((device) => {
        requests.push(axios.get(`http://${data_server_address}:8081/api/airdata/score/getByDeviceId/${device.key}`))
    })
    return await axios.all(requests)
}
export default function useScore() {

    const [device, setDevice] = useState([])
    const [deviceScore, setDeviceScore] = useState()

    useEffect(() => {
        const interval = setInterval(() => {
            getScore(device.key)
                .then((response) => {
                    // console.log(response.data[0])
                    setDeviceScore({ ...response.data[0], name: device.name })
                }).catch((error) => {
                    console.log("> error : ", error)
                })
        }, 5000)
        return () => clearInterval(interval)
    }, [device])

    return {
        setScoreDevice: setDevice,
        deviceScore,
        resetScore: () => {
            setDeviceScore(null)
        },
    }
}


export function useMultipleScores() {

    const [devices, setDevices] = useState([])
    const [devicesScores, setDevicesScores] = useState()

    useEffect(() => {
        const interval = setInterval(() => {
            getScores(devices)
                .then((responses) => {
                    // console.log(response.data[0])
                    let result = []
                    for (let i = 0; i < devices.length; i++) {
                        // console.log("> response : ",responses[i].data[0])
                        result.push({ ...responses[i].data[0], name: devices[i].name })
                    }
                    // console.log("> result : ", result)
                    setDevicesScores(result)
                }).catch((error) => {
                    console.log("> error : ", error)
                })
        }, 5000)
        return () => clearInterval(interval)
    }, [devices])

    return {
        setScoreDevices: setDevices,
        devicesScores
    }
}

