import React, { useState, useEffect } from "react"
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { Container, Typography } from '@material-ui/core'
import { THEME2 } from './variable'
import useUsers from "./hooks/useUsers"
import { motion } from "framer-motion"
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Logo from './Logo'
import UserForm from "./Form/UserForm"


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


const LeftContainerWrapper = styled.div`
    width: 50vw;
    height: 100vh;
    position: fixed;
    
    display: ${props => props.mobile ? 'block' : 'none'};
    
`

const FormWrapper = styled(motion.div)`

display: flex;
flex-direction: column;
align-items: center;
`
export const defaultUser = { email: null, password: null }
export const defaultAccount = { email: null, password: null, firstname: null, surname: null }

export default function Login() {
    const { isLoggedIn, signIn, signUp, error } = useUsers()
    const [user, setUser] = useState(defaultUser)
    const [account, setAccount] = useState(defaultAccount)
    const router = useRouter()
    const matches = useMediaQuery(`(min-width: ${THEME2.breakpointM}px)`);
    const [loading, setLoading] = useState(false)
    const [register, setRegister] = useState(false)
    const [localError,setLocalError] = useState(false)

    useEffect(() => {
        if (isLoggedIn) {
            router.push("/main")
        }
    }, [isLoggedIn])

    useEffect(()=>{
        setLocalError(error)
    },[error])


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
                        <FormWrapper initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
                            <Logo size="86px" margin="0 0 41px 0" />
                            <Typography align="center" style={{ marginBottom: 10 }} variant="h3" component="h1" color="primary">
                                AIRADAR
                        </Typography>
                            <Typography variant="body2" style={{ color: THEME2.red, height: 10, marginBottom: 32 }}>{localError.message ?? ""}</Typography>
                            {!register ? <UserForm.SignInForm setError={setLocalError} setRegister={setRegister} setLoading={setLoading} setUser={setUser} error={localError} user={user} signIn={signIn} loading={loading} router={router} />
                                : <UserForm.SignUpForm setError={setLocalError} setRegister={setRegister} setLoading={setLoading} setAccount={setAccount} error={localError} account={account} signUp={signUp} loading={loading} router={router} />
                            }

                        </FormWrapper>
                    </MainContainer>
                </MainContainerWrapper>
            </LoginWrapper>
    )

}
