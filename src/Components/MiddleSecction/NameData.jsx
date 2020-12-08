import React from 'react'
import "./Avatars.css"


export function Namedata({ Icon, Name }) {


    return (
        <div className="Namedata-main">
            <div className="Name-Icon"> {<Icon color="#364f6b" size="2.3vw" />}</div>
            <div className="Name-Name">{Name}</div>
        </div>
    )
}
