import React,{useContext} from 'react'
import { Contextdata } from "../Context/ContextProvider";
import "./Avatars.css"
import { BsPersonSquare } from "react-icons/bs";
import { Namedata } from "./NameData";
import  pick  from "../Context/pic.jpeg";
import "./Avatars.css"
export function Avatars() {
 let data= useContext(Contextdata)
 let {post}= data
 

    return (
        <div className="main-Avatars">
            <div ><img  className="Avatars-pic" src={post.avatar_url?post.avatar_url:pick}width="100%" alt="profile dp"/></div>
            <div><Namedata Icon={BsPersonSquare} Name={post.login} /></div>
            <a href={post.html_url}><button>Profile</button></a>
        </div>
    )
}
