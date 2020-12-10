import React,{useContext} from 'react'
import { Contextdata } from "../Context/ContextProvider";
import { Followersandothersdata } from "./FollowersAndOthersData";
import { BsPeopleFill } from "react-icons/bs";
export function Renderingnumbers() 
{
  const data=useContext(Contextdata)
   const {post}=data;
   console.log(post.followers);
    return (
        <div className="rendering-main">
          <Followersandothersdata pic={BsPeopleFill} text="Followers" number={post.followers}/>
          <Followersandothersdata/>
          <Followersandothersdata/>
          <Followersandothersdata/>  
  
  
  
        </div>
    )
}
