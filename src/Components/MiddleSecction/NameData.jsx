import React from 'react'


export function Namedata({ Icon, Name }) {


    return (
        <div className="Namedata-main">
            <div> {<Icon color="#364f6b" size="2vw" />}</div>
            <div>{Name}</div>
        </div>
    )
}
