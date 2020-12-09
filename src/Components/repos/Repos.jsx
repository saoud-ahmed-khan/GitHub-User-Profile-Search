import React from 'react'
import "./repos.css"
import { Renderingrepo } from "./RenderingRepo";
export function Repos(props) {


    return (
        <div className="Repo-main">
            <div className="repo-texr">GitHub Repositories</div>
            <div><Renderingrepo/></div>
            <div><Renderingrepo/></div>
            <div><Renderingrepo/></div>
            
            

        </div>
    )
}
