import { FirebaseContext } from "../../utils/firebase/firebase"
import React, { useContext, useEffect, useState } from 'react'

const defaultError = {}

export default function useUsers() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState({})
    const [error, setError] = useState(null)
    const firebase = useContext(FirebaseContext)
    

    const signUp = ({ email, password }, callback,callback2) => {
        return firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((response) => {
                setError(defaultError)
                callback()
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
                setUser(user)
            } else {
                setIsLoggedIn(false)
            }

        })
        return () => unSubscribe()
    }, [])

    return { user ,isLoggedIn, signOut, signIn, signUp , error}
}
