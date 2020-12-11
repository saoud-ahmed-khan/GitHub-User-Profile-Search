import React,{useContext} from 'react'
import { Contextdata } from "../Context/ContextProvider";
import { Followersandothersdata } from "./FollowersAndOthersData";
import { BsPeopleFill } from "react-icons/bs";
import { BsPersonLinesFill } from "react-icons/bs";
import { GoRepo } from "react-icons/go"
import { GoGist } from "react-icons/go"

export function Renderingnumbers() 
{
  let data=useContext(Contextdata)
   let {post}=data;
    return (
        <div className="rendering-main">
          <Followersandothersdata Icon={BsPeopleFill } text="Followers" number={post.followers}/>
          <Followersandothersdata Icon={BsPersonLinesFill } text="Following" number={post.following}/>
          <Followersandothersdata Icon={GoRepo } text="Repos" number={post.public_repos}/>
          <Followersandothersdata Icon={GoGist } text="Gists" number={post.public_gists}/>  
  
  
  
        </div>
    )
}
