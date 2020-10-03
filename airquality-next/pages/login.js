import React, { useState, useEffect } from "react"
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { TextField, Container, Button, Typography, Divider } from '@material-ui/core'
import { THEME2 } from '../components/variable'
import useUsers from "../components/hooks/useUsers"
import { motion } from "framer-motion"

const LoginWrapper = styled(motion.div)`

    width: 100vw;
    height: 100%;
    background: url("../static/undraw_air_support_wy1q.png");
    background-repeat: no-repeat;
    // background-size: 1000px 500px;
    background-position: bottom;

`
const MainContainer = styled(Container)`
&&{
    background: transparent;
    min-height: 100vh;
    display: flex ;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 30px;
}
`


const LoginForm = styled.form`
max-width: 300px;
width: 100%;
display: flex ;
justify-content: center;
align-items: center;
flex-direction: column;

`

const InputTextField = styled(TextField)`
&&{
    
    margin-bottom: 24px;
} 
`

const SubmitButton = styled(Button)`
height: 42px;
span{letter-spacing: 4px;}
`
const RegisterButton = styled(Button)`
height: 42px;
span{letter-spacing: 4px;}
`

export default function Login() {
    const { isLoggedIn, signIn, error } = useUsers()
    const [user, setUser] = useState({ email: null, password: null })
    const router = useRouter()

    
    useEffect(()=>{
        if(error){
            console.error(`> + ${error.message}`)
        }

    },[error])

    useEffect(()=> {
       if(isLoggedIn){
           router.push("/main")
           console.log("Yes I am log in")
       } 
    },[isLoggedIn])


    return (
        isLoggedIn ? <></> : 
            <LoginWrapper initial={{opacity: 0}} animate={{opacity: 1}}>
            <MainContainer maxWidth="md">
                <motion.div initial={{opacity: 0, y: 40}} animate={{opacity: 1, y: 0}}>
                <Typography align="center" style={{marginBottom: 10, letterSpacing: 8}} variant="h3" component="h1" color="primary">
                    AIRADAR
                </Typography>
                <Typography variant="body2" style={{color: THEME2.red, height: 10, marginBottom: 32}}>{ error.message ?? "" }</Typography>

                <LoginForm onSubmit={(event) => {
                    event.preventDefault();
                    console.log(user)
                    signIn(user, ()=>{router.push("/main")})
                }}>

            
                    <InputTextField required value={user.email ?? ""} onChange={(event)=>setUser({...user, email: event.currentTarget.value})} fullWidth color="primary" label="email" variant="outlined"></InputTextField>
                    <InputTextField required value={user.password ?? ""} onChange={(event)=>setUser({...user, password: event.currentTarget.value})} fullWidth color="primary" label="password" variant="outlined"></InputTextField>
                    <SubmitButton color="primary" type="submit" fullWidth variant="contained">Login</SubmitButton>
                    <Divider style={{ margin: '16px 0', backgroundColor: THEME2.dividerColor, width: '100%' }} ></Divider>
                    <RegisterButton color="primary" variant="contained" fullWidth >Register</RegisterButton>


                </LoginForm>
                </motion.div>
            </MainContainer>
            {/* <Background /> */}

        </LoginWrapper>
     )
        
}
