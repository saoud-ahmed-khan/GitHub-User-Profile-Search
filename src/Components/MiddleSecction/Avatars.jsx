import React from 'react'
import {   BsPersonSquare } from "react-icons/bs";
import { Namedata } from "./NameData";

export function Avatars() {
    
   
    return (
        <div>
            <div>
                <img src="https://avatars3.githubusercontent.com/u/60979682?v=4" alt="profile dp"/>
            </div>
            <div>
                <div><Namedata Icon={BsPersonSquare} /></div>
                

            </div>
        </div>
    )
}
