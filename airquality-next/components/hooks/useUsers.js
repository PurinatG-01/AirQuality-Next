import { FirebaseContext } from "../../utils/firebase/firebase"
import React, { useContext, useEffect, useState } from 'react'
import { Info } from "@material-ui/icons";

export const defaultError = { message: null }

const checkExistName = (name, devices) => {
    let result;
    devices.forEach((e) => {
        if (e.name == name) {
            result = true
        }
    })

    return result ?? false
}


export default function useUsers() {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState({})
    const [userData, setUserData] = useState({})
    const [error, setError] = useState(defaultError)
    const firebase = useContext(FirebaseContext)
    const [devicesData, setDevicesData] = useState([])

    const signUp = ({ email, password, firstname, surname }, callback, callback2) => {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((response) => {
                setError(defaultError)
                firebase.database().ref('users/').push({
                    firstname: firstname,
                    surname: surname,
                    email: email,
                });
                callback(firstname, surname, email)
            })
            .catch((error) => {
                setError(error)
                callback2()
            })
    }

    const signOut = (callback, callback2) => {
        return firebase.auth().signOut()
            .then(() => {
                setIsLoggedIn(false)
                setError(defaultError)
                callback()
            })
            .catch((error) => {
                setError(error)
                callback2()
            })
    }

    const signIn = ({ email, password }, callback, callback2) => {
        return firebase.auth().signInWithEmailAndPassword(email, password)
            .then((response) => {
                setIsLoggedIn(true)
                setError(defaultError)
                callback()
            }).catch((error) => {
                setError(error)
                callback2()
            })

    }

    const addDevice = (deviceObj, callbackSuccess, callbackError) => {

        const db = firebase.database().ref('users/' + userData.key)
        db.once('value').then((snapshot) => {
            // Check if has exist name
            if (('devices' in userData.data)) {
                if (checkExistName(deviceObj.name, snapshot.val().devices)) {
                    if (callbackError)
                        callbackError()
                } else {
                    let devices = snapshot.val().devices
                    // console.log("Have device : ",devices)
                    devices.push(deviceObj)
                    db.update({
                        ...snapshot.val(), devices: devices
                    }).then(() => {
                        let temp = userData
                        temp.data = { ...temp.data, devices: devices }
                        setUserData(temp)
                        setDevicesData(userData.data.devices)
                        // console.log("> userData after update :", userData)
                        if (callbackSuccess)
                            callbackSuccess()
                    }).catch((error) => {
                        setError(error)
                        console.error("Add device error > ", error)
                        if (callbackError)
                            callbackError()
                    })
                }


            } else {
                // Adding first device to account
                let devices = [deviceObj]
                db.update({
                    ...snapshot.val(), devices: devices
                }).then(() => {
                    let temp = userData
                    temp.data = { ...temp.data, devices: devices }
                    setUserData(temp)
                    setDevicesData(userData.data.devices)
                    // console.log("> userData after update :", userData)
                    if (callbackSuccess)
                        callbackSuccess()
                }).catch((error) => {
                    setError(error)
                    console.error("Add device error > ", error)
                    if (callbackError)
                        callbackError()
                })
            }

        }).catch((error) => {
            setError(error)
            console.error("Get user data error > ", error)
            if (callbackError)
                callbackError()
        })

    }

    const editDevice = (rowId, editedDeviceObj, callbackSuccess, callbackError) => {

        // 1. Succeed get user data
        let db = firebase.database().ref('users/' + userData.key)
        db.once("value")
            .then((snapshot) => {
                // 1.1 Get devices array from db
                let devices = snapshot.val().devices
                // 1.2 Pop device from array at specific index and push edit obj to array
                devices.splice(rowId, 1, editedDeviceObj)
                // 1.3 Update to DB
                db.update({
                    ...snapshot.val(), devices: devices
                }).then(() => {
                    // 1.3.1 then => set๊UserData, setDevicesData, and use callbackSuccess
                    let temp = userData
                    temp.data = { ...temp.data, devices: devices }
                    setUserData(temp)
                    setDevicesData(userData.data.devices)
                    if (callbackSuccess)
                        callbackSuccess()
                }).catch((error) => {
                    // 1.3.2 catch => setError, and use callbackError
                    setError(error)
                    console.error("Add device error > ", error)
                    if (callbackError)
                        callbackError()
                })
            }).catch((error) => {
            // 2. Failed get user data
                setError(error)
                console.error("Get user data error > ", error)
                if (callbackError)
                    callbackError()
            })




    }

    useEffect(() => {
        const unSubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setIsLoggedIn(true)
                firebase.database().ref('users/').once("value").then((snapshot) => {

                    var result = Object.keys(snapshot.val()).map((key) => [String(key), snapshot.val()[key]]);
                    result.forEach((el) => {

                        if (user.email.toLowerCase() == el[1].email.toLowerCase()) {
                            setUserData({ key: el[0], data: el[1] })
                            setDevicesData(el[1].devices ?? [])
                        }

                    })
                    setUser(user)

                }).catch((err) => {
                    setError({ ...error, getUserError: err })
                })


            } else {
                setIsLoggedIn(false)
                setUser({})
                setUserData({})
                setDevicesData([])
            }
        })
        return () => unSubscribe()
    }, [])

    // console.log("devicesData in hooks : ", devicesData)

    return { user, userData, isLoggedIn, signOut, signIn, signUp, error, addDevice, editDevice, devicesData }
}



export const TestHook = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        const in1 = setInterval(() => {
            setCount(count + 1)
            console.log("Count : ", count)

        }, 1000)
        return () => { clearInterval(in1) }
    })

    return count
}
