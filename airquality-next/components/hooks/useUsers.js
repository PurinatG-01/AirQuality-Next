import { FirebaseContext } from "../../utils/firebase/firebase"
import React, { useContext, useEffect, useState } from 'react'

const defaultError = {}

export default function useUsers() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState({})
    const [error, setError] = useState(defaultError)
    const firebase = useContext(FirebaseContext)
    

    const signUp = ({ email, password }, callback) => {
        return firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((response) => {
                setError(defaultError)
                callback()
            })
            .catch((error) => {
                setError(error)
            })
    }

    const signOut = (callback) => {
        return firebase.auth().signOut()
            .then(() => {
                setIsLoggedIn(false)
                setError(defaultError)
                callback()
            })
            .catch((error) => {
                setError(error)
            })
    }

    const signIn = ({ email, password },callback) => {
        return firebase.auth().signInWithEmailAndPassword(email, password)
        .then((response) => {
            setIsLoggedIn(true)
            setError(defaultError)
            callback()
        }).catch((error) => {
            setError(error)
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
