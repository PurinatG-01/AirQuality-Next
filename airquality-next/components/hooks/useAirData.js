import React, { useEffect, useState } from "react";
import axios from "axios"

// const auth_token = "XYS9rw2wCXCqBN8yq9TnJw_4zy0p5A5j";
const server_address = "34.69.148.234"
const data_server_address = "muict-senior2020-airquality.uc.r.appspot.com"


// Current hook for get air data

const getAirData = async (setData, auth_token) => {

  try {
    const airdata = await axios.get(`https://${data_server_address}/api/airdata/getByDeviceId/${auth_token}`)
    const resApp = await axios.get(`http://${server_address}/${auth_token}/isAppConnected`)
    const resCheck = await axios.get(`http://${server_address}/${auth_token}/isHardwareConnected`)

    const final_data = {
      v0: airdata.data[0].co2,
      v1: airdata.data[0].temperature,
      v2: airdata.data[0].humidity,
      v3: airdata.data[0].pressure,
      v4: airdata.data[0].gas,
      v5: airdata.data[0].pm1_0,
      v6: airdata.data[0].pm2_5,
      v7: airdata.data[0].pm10_0,
    }

    setData({ ...final_data, resApp: resApp.data, resCheck: resCheck.data })
  }
  catch (error) {
    console.error(`> error : ${error}`);
  }
}

export default function useAirData(props){
  const auth_token = props
  const [dataState, setDataState] = useState({
    v0: 0,
    v1: 0,
    v2: 0,
    v3: 0,
    v4: 0,
    v5: 0,
    v6: 0,
    v7: 0,
    resCheck: false,
    resApp: false,
  });

  useEffect(() => {

    getAirData(setDataState, auth_token)

    const interval = setInterval(() => {
      getAirData(setDataState, auth_token)
    }, 5000)

    return () => clearInterval(interval)

  }, [])
  return dataState;

}