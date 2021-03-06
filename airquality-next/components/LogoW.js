import React from 'react'
import styled from 'styled-components'

const LogoWrapper = styled.div`
    ${props => props.size ? `width: ${props.size};height: ${props.size};` : `width: 86px;
    height: 86px;`}
    ${props => props.margin ? `margin: ${props.margin};` : `margin: auto`}
`
export default function Logo(props) {
    const { margin, size } = props
    return (
        <LogoWrapper margin={margin ?? null} size={size ?? null} >
            <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.7078 9.21347C15.6928 10.412 21.0785 12.5843 26.7415 11.6854C32.4044 10.7865 35.3932 10.2247 37.0785 11.4607" stroke="white" strokeWidth="2"/>
<path d="M9.77539 9.10114C12.6967 11.573 18.5728 15.7066 20.899 16.4045C23.1462 17.0787 25.6564 17.7059 32.472 16.8539C34.2698 16.6292 38.8765 18.2023 39.1012 19.2135" stroke="white" strokeWidth="2"/>
<path d="M6.06738 7.75281C7.82768 8.87641 12.809 10.4494 18.6517 7.75281C25.955 4.38203 30.2247 5.28089 33.146 6.29212" stroke="white" strokeWidth="2"/>
<path d="M2.13477 14.7191C3.93252 16.03 8.16415 17.7844 11.573 16.9663C14.382 16.2922 19.1385 15.9551 20.6741 16.2922" stroke="white" strokeWidth="2"/>
<path d="M36.2921 30.7865L27.7342 37.9775C21.4972 37.9775 17.0786 37.5159 17.0786 37.5159C17.0786 31.1931 19.9427 25.955 26.1797 25.955C32.4168 25.955 37.7528 32.4719 36.2921 30.7865Z" fill="white"/>
<path d="M2.20368 28.5132L7.70652 34.6067C12.1401 34.6067 15.281 34.1451 15.281 34.1451C11.4608 33.0337 9.93928 25.2809 5.50572 25.2809C1.6855 26.1798 1.49155 27.6822 2.20368 28.5132Z" fill="white"/>
<path d="M31.6855 36.0709C31.6855 36.0709 28.1443 38.5067 20.4496 38.5067C12.7548 38.5067 5.73045 33.2584 5.73045 33.2584C4.26977 34.2697 8.87652 26.1798 15.3934 25.5056C23.0881 25.5056 27.8653 30.2247 31.6855 36.0709Z" fill="white"/>
<circle cx="20" cy="20" r="19" stroke="white" strokeWidth="2"/>
<mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
<circle cx="20" cy="20" r="18" stroke="#6FCF97" strokeWidth="4"/>
</mask>
<g mask="url(#mask0)">
</g>
</svg>

        </LogoWrapper>
    )
}
