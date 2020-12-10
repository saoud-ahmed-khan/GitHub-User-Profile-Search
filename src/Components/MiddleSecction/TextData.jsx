import React,{useContext} from 'react'
import { Contextdata } from "../Context/ContextProvider";
import "./Avatars.css"
export function Textdata(props) {

let data= useContext(Contextdata)
let {post}=data
    return (
        <div className="textdata-main">
            
    <div><span>user-name: </span>{post.name?post.name:"null"}</div>
                <div><span>URL: </span> <a href={post.html_url}>{post.html_url?post.html_url:"null"}</a></div>
                <div><span>Location: </span>{post.location?post.location:"null"}</div>
                <div><span>Email: </span>{post.email?post.email:"null"}</div>
                <div><span>Company: </span>{post.company?post.company:"null"}</div>
                <div><span>Blog: </span>{post.blog?post.blog:"null"}</div>
                <div><span>Twitter User Name: </span>{post.twitter_username?post.twitter_username:"null"}</div>
                
           
        </div>
    )
}
