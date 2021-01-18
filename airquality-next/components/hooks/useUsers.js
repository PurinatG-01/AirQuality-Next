import { FirebaseContext } from "../../utils/firebase/firebase"
import React, { useContext, useEffect, useState } from 'react'

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

    const addDevice = (deviceObj, callback, callback2) => {

        const db = firebase.database().ref('users/' + userData.key)
        db.once('value').then((snapshot) => {
            // console.log("> snapshot : ", snapshot.val())
            // Check if has exist name
            // console.log("userData jaa!! : ",('devices' in userData[1]))
            if (('devices' in userData.data)) {
                if (checkExistName(deviceObj.name, snapshot.val().devices)) {
                    if(callback2)
                        callback2()
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
                        console.log("> userData after update :", userData)
                        if (callback)
                            callback()
                    }).catch((error) => {
                        if (callback2)
                            callback2()
                    })
                }


            } else {
                // alert("First Device !!")
                let devices = [deviceObj]
                db.update({
                    ...snapshot.val(), devices: devices
                }).then(() => {
                    let temp = userData
                    temp.data = { ...temp.data, devices: devices }
                    setUserData(temp)
                    setDevicesData(userData.data.devices)
                    console.log("> userData after update :", userData)
                    if (callback)
                        callback()
                }).catch((error) => {
                    setError(error)
                    console.log("error > ",error)
                    if (callback2)
                        callback2()
                })
            }

        })

    }

    const editDevice = (deviceObj, callback, callback2) => {

        alert("Edit Device!!")
        // const db = firebase.database().ref('users/' + userData[0])
        // db.once('value').then((snapshot) => {
        //     console.log("> snapshot : ", snapshot.val())
        //     let devices = snapshot.val().devices
        //     // console.log("Have device : ",devices)
        //     devices.push(deviceObj)
        //     db.update({
        //         ...snapshot.val(), devices: devices
        //     }).then(() => {
        //         // Update UserData state
        //         let temp = userData
        //         temp[1] = { ...temp[1], devices: devices }
        //         setUserData(temp)
        //         // console.log("> userData after update :", userData)
        //         if (callback)
        //             callback()
        //     }).catch((error) => {
        //         if (callback2)
        //             callback2()
        //     })



        // })
    }

    useEffect(() => {
        const unSubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setIsLoggedIn(true)
                firebase.database().ref('users/').once("value").then((snapshot) => {

                    var result = Object.keys(snapshot.val()).map((key) => [String(key), snapshot.val()[key]]);
                    result.forEach((el) => {

                        if (user.email.toLowerCase() == el[1].email.toLowerCase()) {
                            setUserData({key: el[0], data: el[1]})
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

    console.log("devicesData in hooks : ", devicesData)

    return { user, userData, isLoggedIn, signOut, signIn, signUp, error, addDevice, editDevice, devicesData }
}
