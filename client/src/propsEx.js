import React from "react"



export default function PropsEx (props) {
    return (
        <div className="propsEx">
            <h1>{props.name}</h1>
            <h2>{props.lastname}</h2>
        </div>
    )
    }