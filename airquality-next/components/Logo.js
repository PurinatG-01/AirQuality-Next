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
            <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 178 178" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M61 41C69.8333 46.3333 93.8 56 119 52C144.2 48 157.5 45.5 165 51" stroke="#6FCF97" strokeWidth="8" />
                <path d="M43.5 40.5C56.5 51.5 82.6484 69.8945 93 73C103 76 114.171 78.7912 144.5 75C152.5 74 173 81 174 85.5" stroke="#6FCF97" strokeWidth="8" />
                <path d="M27 34.5001C34.8333 39.5001 57 46.5001 83 34.5001C115.5 19.5001 134.5 23.5 147.5 28" stroke="#6FCF97" strokeWidth="8" />
                <path d="M9.5 65.5C17.5 71.3333 36.3308 79.1406 51.5 75.5C64 72.5 85.1667 71 92 72.5" stroke="#6FCF97" strokeWidth="8" />
                <path d="M161.5 137L123.418 169C95.6628 169 76 166.946 76 166.946C76 138.809 88.7452 115.5 116.5 115.5C144.255 115.5 168 144.5 161.5 137Z" fill="#7FEDAD" />
                <path d="M9.80592 126.884L34.2935 154C54.0229 154 68 151.946 68 151.946C51 147 44.2293 112.5 24.5 112.5C7.5 116.5 6.63694 123.186 9.80592 126.884Z" fill="#7FEDAD" />
                <path d="M141 160.515C141 160.515 125.242 171.355 91 171.355C56.7583 171.355 25.5 148 25.5 148C18.9999 152.5 39.5 116.5 68.5 113.5C102.742 113.5 124 134.5 141 160.515Z" fill="#6FCF97" />
                <circle cx="89" cy="89" r="85" stroke="#6FCF97" strokeWidth="8" />
                <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="178" height="178">
                    <circle cx="89" cy="89" r="85" stroke="#6FCF97" strokeWidth="8" />
                </mask>
                <g mask="url(#mask0)">
                </g>
            </svg>

        </LogoWrapper>
    )
}
