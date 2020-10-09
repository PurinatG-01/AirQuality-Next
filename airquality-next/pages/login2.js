import React, { useState, useEffect } from "react"
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { TextField, Container, Button, Typography, Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert';
import { THEME2 } from '../components/variable'
import useUsers from "../components/hooks/useUsers"
import { motion } from "framer-motion"
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Logo from '../components/Logo'

const LoginWrapper = styled(motion.div)`
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: row;
    
`

const MainContainer = styled(Container)`
&&{
    background: transparent;
    min-height: 100%;
    
    display: flex ;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 50px 0;


}
`

const MainContainerWrapper = styled.div`
    
    width: ${props => props.mobile ? "50vw" : '100vw'};
    height: 100vh;
    position:fixed;
    right:0;
    overflow: scroll;
`


const LoginForm = styled.form`
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

const LeftContainerWrapper = styled.div`
    width: 50vw;
    height: 100vh;
    position: fixed;
    
    display: ${props => props.mobile ? 'block' : 'none'};
    
`

const LoginFormWrapper = styled(motion.div)`

display: flex;
flex-direction: column;
align-items: center;
`
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Login() {
    const { isLoggedIn, signIn, error } = useUsers()
    const [user, setUser] = useState({ email: null, password: null })
    const router = useRouter()
    const matches = useMediaQuery(`(min-width: ${THEME2.breakpointM}px)`);
    const [loading, setLoading] = useState(false)
    const [snackClose, setSnackClose] = useState(false)

    useEffect(() => {
        if (isLoggedIn) {
            router.push("/main")
        }
    }, [isLoggedIn])

    console.log(error)

    return (
        isLoggedIn ? <></> :
            <LoginWrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <LeftContainerWrapper mobile={matches}>
                    <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 688 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H475.15C489.565 0 501.942 10.2525 504.626 24.4157L687.258 988.416C690.759 1006.89 676.59 1024 657.783 1024H0V0Z" fill="#6FCF97" />
                    </svg>
                </LeftContainerWrapper>
                <MainContainerWrapper mobile={matches}>
                    <MainContainer maxWidth="md"  >
                        <LoginFormWrapper initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
                            <Logo size="86px" margin="0 0 41px 0" />
                            <Typography align="center" style={{ marginBottom: 10 }} variant="h3" component="h1" color="primary">
                                AIRADAR
                        </Typography>
                            <Typography variant="body2" style={{ color: THEME2.red, height: 10, marginBottom: 32 }}>{error?.message ?? ""}</Typography>
                            <LoginForm onSubmit={(event) => {
                                event.preventDefault();
                                console.log(user)
                                setLoading(true)
                                signIn(user, () => { router.push("/main"); setLoading(false) }, () => { setLoading(false) })
                            }}>
                                <InputTextField error={error ?? false} required value={user.email ?? ""} onChange={(event) => setUser({ ...user, email: event.currentTarget.value })} fullWidth color="primary" label="Email" ></InputTextField>
                                <InputTextField error={error ?? false} required value={user.password ?? ""} onChange={(event) => setUser({ ...user, password: event.currentTarget.value })} fullWidth color="primary" type="Password" label="password" ></InputTextField>
                                <SubmitButton disabled={loading} color="primary" type="submit" fullWidth variant="contained">SIGN IN</SubmitButton>
                                <RegisterButton disabled={loading} color="primary" variant="outlined" fullWidth >SIGN UP</RegisterButton>
                            </LoginForm>
                        </LoginFormWrapper>
                    </MainContainer>
                </MainContainerWrapper>
            </LoginWrapper>
    )

}
