import React, { useEffect, useState } from "react";
import axios from "axios"
import fileDownload from 'js-file-download'
const { convertArrayToCSV } = require('convert-array-to-csv');

const data_server_address = "139.59.126.32"


// Current hook for get air data
const getAirData = async (authToken, setData) => {

  axios
    .get(`http://${data_server_address}:8081/api/airdata/rawData/getByDeviceId/${authToken}`)
    .then((airData) => {
      // const resApp = await axios.get(`http://${server_address}/${auth_token}/isAppConnected`)
      // const resCheck = await axios.get(`http://${server_address}/${auth_token}/isHardwareConnected`)
      if (airData.data.length == 1) {
        setData({
          v0: airData.data[0].co,
          v1: airData.data[0].temperature,
          v2: airData.data[0].humidity,
          v3: airData.data[0].pressure,
          v4: airData.data[0].VOC,
          v5: airData.data[0].pm1_0,
          v6: airData.data[0].pm2_5,
          v7: airData.data[0].pm10_0,
          resApp: true,
          resCheck: true,
        })
      }
    })
    .catch((error) => {
      console.error(`> error : ${error}`);
    })
}

export default function useAirData() {
  const [authToken, setAuthToken] = useState("")
  const [dataState, setDataState] = useState();
  const [retrieveData, setRetrieveData] = useState(false)

  useEffect(() => {
    if (authToken != "") {
      getAirData(setDataState, authToken)
      const interval = setInterval(() => {
        axios.get(`http://${data_server_address}:8081/api/airdata/getDeviceStatus/${authToken}`)
          .then((response) => {
            if (response.data || retrieveData) {
              getAirData(authToken, setDataState)
            } else {
              setDataState(undefined)
            }
          }).catch((error) => {
            console.log("> error : ", error)
          })

      }, 5000)
      return () => clearInterval(interval)
    }

  }, [authToken])

  return {
    setRetrieveAirData: setRetrieveData,
    airData: dataState,
    setAuthToken,
    authToken,
    resetAirData: () => {
      setDataState(null)
    },
  }

}


export const useHistoricalData = () => {
  const getHistoricalData = async (deviceID, fileName, limit) => {
    try {
      const historicalData = await axios.get(`http://${data_server_address}:8081/api/airdata/rawData/getHistoricalByDeviceId/${deviceID}`)
      fileDownload(historicalData.data, fileName)
    } catch (error) {
      console.error(`> error : ${error}`);
    }

  }
  return {
    getHistoricalData
  }
}