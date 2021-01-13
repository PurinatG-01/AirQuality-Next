import React from 'react'

export default function Test(props) {
    console.log("child test : ", props.data)
    return (
        <div>
            {props.data.val}
        </div>
    )
}
