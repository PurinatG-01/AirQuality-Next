import { FirebaseContext } from "../../utils/firebase/firebase"
import React, { useContext, useEffect, useState } from 'react'

export const defaultError = {message: null}

export default function useUsers() {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState({})
    const [userData, setUserData] = useState({})
    const [error, setError] = useState(defaultError)
    const firebase = useContext(FirebaseContext)
    
    const signUp = ({ email, password,firstname,surname }, callback,callback2) => {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((response) => {
                setError(defaultError)
                firebase.database().ref('users/').push({
                    firstname: firstname,
                    surname: surname,
                    email: email,
                });
                callback(firstname,surname,email)
            })
            .catch((error) => {
                setError(error)
                callback2()
            })
    }

    const signOut = (callback,callback2) => {
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

    const signIn = ({ email, password },callback,callback2) => {
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

    useEffect(() => {
        const unSubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setIsLoggedIn(true)
                firebase.database().ref('users/').once("value").then((snapshot)=>{
                    
                    var result = Object.keys(snapshot.val()).map((key) => [String(key), snapshot.val()[key]]);
                    result.forEach((el)=>{
                            
                            if(user.email == el[1].email){
                                setUserData(el)
                            }
                        
                    })
                    setUser(user)

                }).catch((err)=>{
                    setError({...error, getUserError: err})
                })

                
            } else {
                setIsLoggedIn(false)
            }

        })
        return () => unSubscribe()
    }, [])

    return { user, userData ,isLoggedIn, signOut, signIn, signUp , error}
}
