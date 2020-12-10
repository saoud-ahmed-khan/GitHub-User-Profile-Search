import React,{useContext} from 'react'
import { Contextdata } from "../Context/ContextProvider";
import "./repos.css"
import { Renderingrepo } from "./RenderingRepo";
export function Repos(props) {
let data=useContext(Contextdata)
let {repos}=data
console.log(repos);

    return (
        <div className="Repo-main">
            <div className="repo-texr">GitHub Repositories</div>
            {
               
                repos.map((repo)=>
                {
                    return(
                    <Renderingrepo reponame={repo.name} fork={repo.forks} language={repo.language}/>
                    )
                })
            }
           
            
            

        </div>
    )
}
