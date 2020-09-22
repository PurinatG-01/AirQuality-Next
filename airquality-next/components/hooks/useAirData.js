import React, { useEffect, useState } from "react";

const auth_token = "XYS9rw2wCXCqBN8yq9TnJw_4zy0p5A5j";
const server_address = "34.69.148.234"


export default function useAirData() {
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
    counter: "",
  });

  useEffect(() => {
    const getAirData = async () => {
      try {
        let checkHardware = await fetch(
          `http://${server_address}/${auth_token}/isHardwareConnected`
        );
        let resCheck = await checkHardware.json();

        let checkApp = await fetch(`http://${server_address}/${auth_token}/isAppConnected`);
        let resApp = await checkApp.json();

        let res0 = await fetch(`http://${server_address}/${auth_token}/get/v0`);
        let v0 = await res0.json();

        let res1 = await fetch(`http://${server_address}/${auth_token}/get/v1`);
        let v1 = await res1.json();
        let res2 = await fetch(`http://${server_address}/${auth_token}/get/v2`);
        let v2 = await res2.json();
        let res3 = await fetch(`http://${server_address}/${auth_token}/get/v3`);
        let v3 = await res3.json();
        let res4 = await fetch(`http://${server_address}/${auth_token}/get/v4`);
        let v4 = await res4.json();

        let res5 = await fetch(`http://${server_address}/${auth_token}/get/v5`);
        let v5 = await res5.json();
        let res6 = await fetch(`http://${server_address}/${auth_token}/get/v6`);
        let v6 = await res6.json();
        let res7 = await fetch(`http://${server_address}/${auth_token}/get/v7`);
        let v7 = await res7.json();

        console.log("-------------");
        setDataState({
          v0: v0[0],
          v1: v1[0],
          v2: v2[0],
          v3: v3[0],
          v4: v4[0],
          v5: v5[0],
          v6: v6[0],
          v7: v7[0],
          resCheck: resCheck,
          resApp: resApp,
          counter: ""
        });
      } catch (error) {
        console.error(`> error : ${error}`);
      }
      const time1 = setTimeout(getAirData, 5000);
    };
    const time2 = setTimeout(getAirData, 5000);

  }, []);

  return dataState;
}
