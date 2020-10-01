import React, { useState } from "react"
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { TextField, Container, Button, Typography, Divider } from '@material-ui/core'
import { THEME2 } from '../components/variable'
import useUsers from "../components/hooks/useUsers"

const LoginWrapper = styled.div`

    width: 100vw;
    height: 100vh;

`
const MainContainer = styled(Container)`
&&{
    background: ${THEME2.white};
    min-height: 100vh;
    display: flex ;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
`
const RegisterButton = styled(Button)`
height: 42px;
`



export default function Login() {
    const { isLoggedIn, signIn } = useUsers()
    const [user, setUser] = useState({ email: null, password: null })
    const router = useRouter()



    return (
        <LoginWrapper>
            <MainContainer maxWidth="md">
                <Typography align="center" style={{marginBottom: 32, letterSpacing: 8}} variant="h3" component="h1" color="primary">
                    AIRADAR
                </Typography>
                <LoginForm onSubmit={(event) => {
                    event.preventDefault();
                    signIn(user)
                }}>

                    <InputTextField fullWidth color="primary" label="email" variant="outlined"></InputTextField>
                    <InputTextField fullWidth color="primary" label="password" variant="outlined"></InputTextField>
                    <SubmitButton color="primary" type="submit" fullWidth variant="contained">Login</SubmitButton>
                    <Divider style={{ margin: '16px 0', backgroundColor: THEME2.dividerColor, width: '100%' }} ></Divider>
                    <RegisterButton color="primary" variant="contained" fullWidth >Register</RegisterButton>


                </LoginForm>

            </MainContainer>

        </LoginWrapper>
    )
}
