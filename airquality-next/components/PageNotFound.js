import React from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { THEME2 } from './variable'
import { Button } from '@material-ui/core'

const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const TitleWrapper = styled.h1`
  color: ${THEME2.primary};
  font-size: 48px;
  margin-bottom: 0;
`

const SubTitleWrapper = styled.h3`
  color: ${THEME2.primary};
  font-weight: 200;
  font-size: 12px;
`

export default function PageNotFound() {
  const router = useRouter();
  return (
    <PageWrapper>
      <TitleWrapper>404</TitleWrapper>
      <SubTitleWrapper>Page not found</SubTitleWrapper>
      <Button
        color="primary"
        variant="outlined"
        onClick={() => {
          router.push("/")
        }}
        style={{ fontSize: 12, padding: "8px 16px", marginTop: 16 }}
      >
        Go to login
      </Button>
    </PageWrapper>
  )
}