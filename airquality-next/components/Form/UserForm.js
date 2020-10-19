import React, { useState } from 'react'
import styled from "styled-components"
import { THEME2 } from "../variable"
import { TextField, Button, Typography } from '@material-ui/core'
import { motion } from "framer-motion"
import { useRouter } from 'next/router'
import { defaultError } from '../hooks/useUsers'
import { defaultUser, defaultAccount } from '../login2'


const SignInFormWrapper = styled(motion.form)`
max-width: 280px;
width: 100%;
display: flex ;
justify-content: center;
align-items: center;
flex-direction: column;
`

const SignUpFormWrapper = styled(motion.form)`
max-width: 280px;
width: 100%;
display: flex ;
justify-content: center;
align-items: center;
flex-direction: column;
`

const InputTextField = styled(TextField)`
&&{
    background-color: ${THEME2.white};
    margin-bottom: 32px;
} 
`

const SubmitButton = styled(Button)`

&&{
    margin-bottom: 16px;
    height: 64px;
    span{letter-spacing: 4px;}
}

`

const RegisterButton = styled(Button)`
&&{
    height: 64px;
    span{letter-spacing: 4px;}
}

`

export function SignInForm(props) {
    const { setUser, user, setLoading, signIn, error, loading, setRegister, setError } = props
    const router = useRouter()

    return (
        <SignInFormWrapper onSubmit={(event) => {
            event.preventDefault();
            setLoading(true)
            signIn(user, () => { router.push("/main"); setLoading(false); setRegister(false); }, () => { setLoading(false); })
        }} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} >
            <InputTextField error={error.message ?? false} required value={user.email ?? ""} onChange={(event) => setUser({ ...user, email: event.currentTarget.value })} fullWidth color="primary" label="email" ></InputTextField>
            <InputTextField error={error.message ?? false} required value={user.password ?? ""} onChange={(event) => setUser({ ...user, password: event.currentTarget.value })} fullWidth color="primary" type="password" label="password" ></InputTextField>
            <SubmitButton disabled={loading} color="primary" type="submit" fullWidth variant="contained">SIGN IN</SubmitButton>
            <RegisterButton disabled={loading} color="primary" onClick={() => { setRegister(true); setError(defaultError); setUser(defaultUser) }} fullWidth variant="outlined">SIGN UP</RegisterButton>

        </SignInFormWrapper>
    )
}


export function SignUpForm(props) {
    const { setRegister, error, account, setAccount, signUp, setLoading, setError, loading } = props
    const router = useRouter()
    const [confirmPassword, setConfirmPassword] = useState("")

    return (

        <SignUpFormWrapper onSubmit={(event) => {
            event.preventDefault();
            setLoading(true)
            if (confirmPassword != account.password) {
                setError({message: "Confirm password is incorrect. Make sure you type correctly."})
                setLoading(false)
            } else {
                signUp(account, () => { router.push("/main"); setLoading(false); setRegister(false); }, () => { setLoading(false); })

            }
        }} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} >
            <InputTextField error={error.message ?? false} required value={account.firstname ?? ""} onChange={(event) => setAccount({ ...account, firstname: event.currentTarget.value })} fullWidth color="primary" label="First name" ></InputTextField>
            <InputTextField error={error.message ?? false} required value={account.surname ?? ""} onChange={(event) => setAccount({ ...account, surname: event.currentTarget.value })} fullWidth color="primary" label="Surname" ></InputTextField>
            <InputTextField error={error.message ?? false} required value={account.email ?? ""} onChange={(event) => setAccount({ ...account, email: event.currentTarget.value })} fullWidth color="primary" label="Email" ></InputTextField>
            <InputTextField error={error.message ?? false} required value={account.password ?? ""} onChange={(event) => setAccount({ ...account, password: event.currentTarget.value })} fullWidth color="primary" type="password" label="Password" ></InputTextField>
            <InputTextField error={error.message ?? false} required value={confirmPassword} onChange={(event) => setConfirmPassword(event.currentTarget.value)} fullWidth color="primary"  type="password" label="Confirm Password" ></InputTextField>
            <SubmitButton disabled={loading} variant="contained" color="primary" fullWidth type="submit" >SIGN UP</SubmitButton>
            <SubmitButton disabled={loading} variant="outlined" color="primary" fullWidth onClick={() => { setRegister(false); setError(defaultError); setAccount(defaultAccount) }}>BACK</SubmitButton>
        </SignUpFormWrapper>
    )
}

export default { SignInForm, SignUpForm }