import firebase from 'firebase/app';
import 'firebase/auth';
import React, { createContext} from "react"

const FirebaseContext = createContext(null)


const config = {
    apiKey: "AIzaSyCEfJTJiZZmtEsX64R_pfDHlVjRFaKRE74",
    authDomain: "test-auth-2dcac.firebaseapp.com",
    databaseURL: "https://test-auth-2dcac.firebaseio.com",
    projectId: "test-auth-2dcac",
    storageBucket: "test-auth-2dcac.appspot.com",
    messagingSenderId: "49240693915",
    appId: "1:49240693915:web:9c2c2ffb02e9eef48d3a3e",
    measurementId: "G-49JYY3LVD8"
};

const FirebaseProvider = ({ children }) => {
    if (!firebase.apps.length) {
      firebase.initializeApp(config)
    }
    return (
      <FirebaseContext.Provider value={ firebase }>
        { children }
      </FirebaseContext.Provider>
    )
  }

  export { FirebaseContext }

  export default FirebaseProvider;