import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ScoreSharp } from '@material-ui/icons'


const data_server_address = "139.59.126.32"

const getScore = async (authToken) => {

    return await axios.get(`http://${data_server_address}:8081/api/airdata/score/getByDeviceId/${authToken}`)

}

export default function useScore() {

    const [device, setDevice] = useState([])
    const [deviceScore, setDeviceScore] = useState([])

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
        deviceScore
    }
}

