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
          <Followersandothersdata pic={<BsPeopleFill color="#364f6b" size="3.3vw" />} text="Followers" number={post.followers}/>
          <Followersandothersdata pic={<BsPeopleFill color="#364f6b" size="3.3vw" />} text="Followers" number={post.followers}/>
          <Followersandothersdata/>
          <Followersandothersdata/>  
  
  
  
        </div>
    )
}
