import React from 'react'
import { Avatars } from "./Avatars";
import { Textdata } from "./TextData";
import "./Avatars.css"
export function Middlesection(props) {

    return (
        <div className="middleSection-main">
            <div className="Avatars"><Avatars /></div>
            <div className="Textdata"><Textdata /></div>
        </div>
    )
}
