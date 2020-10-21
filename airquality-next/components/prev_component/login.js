import React, { useState, useEffect } from "react"
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { TextField, Container, Button, Typography, Divider } from '@material-ui/core'
import { THEME2 } from '../variable'
import useUsers from "../hooks/useUsers"
import { motion } from "framer-motion"

const LoginWrapper = styled(motion.div)`
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
`
const MainContainer = styled(Container)`
&&{
    background: transparent;
    min-height: 100vh;
    display: flex ;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 50px 0;

}
`

const FooterWrapper = styled.div`
    display: flex;
    z-index: -1000;
    position: fixed;
    bottom: -130px;
    width: 100%;

`



const HeaderWrapper = styled.div`
    display: flex;
    z-index: -1000;
    position: fixed;
    top: -130px;
    width: 100%;
    transform: rotate(180deg);

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
    background-color: ${THEME2.white};
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

    useEffect(() => {
        if (error) {
            console.error(`> + ${error.message}`)
        }
    }, [error])

    useEffect(() => {
        if (isLoggedIn) {
            router.push("/main")
            console.log("Yes I am log in")
        }
    }, [isLoggedIn])


    return (
        isLoggedIn ? <></> :
            <LoginWrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <HeaderWrapper>
                    <svg width="100%" height="181" preserveAspectRatio="none" viewBox="0 0 1440 181" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M654.231 64.0372C111.334 65.2049 31.1539 92.2448 0 98.395V181H1440V0C1316.78 10.6556 1332.85 62.5775 654.231 64.0372Z"
                            fill="#6FCF97" />
                    </svg>
                </HeaderWrapper>
                <MainContainer maxWidth="md">
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
                        <Typography align="center" style={{ marginBottom: 10, letterSpacing: 8 }} variant="h3" component="h1" color="primary">
                            AIRADAR
                        </Typography>
                        <Typography variant="body2" style={{ color: THEME2.red, height: 10, marginBottom: 32 }}>{error.message ?? ""}</Typography>
                        <LoginForm onSubmit={(event) => {
                            event.preventDefault();
                            console.log(user)
                            signIn(user, () => { router.push("/main") })
                        }}>
                            <InputTextField required value={user.email ?? ""} onChange={(event) => setUser({ ...user, email: event.currentTarget.value })} fullWidth color="primary" label="email" variant="outlined"></InputTextField>
                            <InputTextField required value={user.password ?? ""} onChange={(event) => setUser({ ...user, password: event.currentTarget.value })} fullWidth color="primary" label="password" variant="outlined"></InputTextField>
                            <SubmitButton color="primary" type="submit" fullWidth variant="contained">Login</SubmitButton>
                            <Divider style={{ margin: '16px 0', backgroundColor: THEME2.dividerColor, width: '100%' }} ></Divider>
                            <RegisterButton color="primary" variant="contained" fullWidth >Register</RegisterButton>
                        </LoginForm>
                    </motion.div>
                </MainContainer>
                <FooterWrapper>
                    <svg width="100%" height="181" preserveAspectRatio="none" viewBox="0 0 1440 181" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M654.231 64.0372C111.334 65.2049 31.1539 92.2448 0 98.395V181H1440V0C1316.78 10.6556 1332.85 62.5775 654.231 64.0372Z"
                            fill="#6FCF97" />
                    </svg>
                </FooterWrapper>

            </LoginWrapper>
    )

}
