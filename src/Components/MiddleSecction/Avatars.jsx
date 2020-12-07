import React from 'react'
import { BsPersonSquare } from "react-icons/bs";
import { Namedata } from "./NameData";
import "./Avatars.css"
export function Avatars() {


    return (
        <div className="main-Avatars">
            <div ><img  className="Avatars-pic" src="https://avatars3.githubusercontent.com/u/60979682?v=4" width="100%" alt="profile dp"/></div>
            <div><Namedata Icon={BsPersonSquare} Name="Here the name comes" /></div>
            <div><Namedata Icon={BsPersonSquare} Name="Here the name comes" /></div>
            <div><Namedata Icon={BsPersonSquare} Name="Here the name comes" /></div>
        </div>
    )
}
