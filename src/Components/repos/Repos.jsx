import React,{useContext} from 'react'
import { Contextdata } from "../Context/ContextProvider";
import "./repos.css"
import { Renderingrepo } from "./RenderingRepo";
export function Repos(props) {
let data=useContext(Contextdata)
let {repos}=data

    return (
        <div className="Repo-main">
            <div className="repo-texr">GitHub Repositories</div>
            {
               
                repos.map((repo)=>
                {
                    return(
                    <Renderingrepo reponame={repo.name} fork={repo.stargazers_count} language={repo.language}/>
                    )
                })
            }
           
            
            

        </div>
    )
}
