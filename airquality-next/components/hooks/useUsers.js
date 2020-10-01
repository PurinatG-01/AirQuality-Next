import { FirebaseContext } from "../../utils/firebase/firebase"
import React, { useContext, useEffect, useState } from 'react'

const defaultError = { operation: null, error: null }

export default function useUsers() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [error, setError] = useState(defaultError)
    const firebase = useContext(FirebaseContext)

    const signUp = ({ email, password }) => {
        return firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((response) => {
                setError(defaultError)
            })
            .catch((error) => {
                console.dir(error);
                setError({ operation: 'signUp', error: error })
            })
    }

    const signOut = () => {
        return firebase.auth().signOut()
            .then(() => {
                setIsLoggedIn(false)
                setError(defaultError)
            })
            .catch((error) => {
                console.dir(error)
                setError({ operation: 'signOut', error: error })
            })
    }

    const signIn = ({ email, password }) => {
        return firebase.auth().signInWithEmailAndPassword(email, password)
        .then((response) => {
            alert("Login Successful")
            setIsLoggedIn(true)
            setError(defaultError)
        }).catch((error) => {
            console.dir(error)
            alert(`Login Failed : ` + error.message)
            setError({ operation: 'signIn', error: error })
        })

    }

    useEffect(() => {
        const unSubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setIsLoggedIn(true)
            } else {
                setIsLoggedIn(false)
            }
        })
        return () => unSubscribe()
    }, [])

    return { isLoggedIn, signOut, signIn, signUp , error}
}
