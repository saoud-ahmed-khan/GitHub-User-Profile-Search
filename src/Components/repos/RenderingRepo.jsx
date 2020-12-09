import React from 'react'
import { GoRepo } from "react-icons/go";
import { GoCode } from "react-icons/go";
import { GoRepoForked} from "react-icons/go";
import "./repos.css"





export function Renderingrepo(props) {
    

    return (
        <div className="rendering-repo-main">
            <div><GoRepo color="#364f6b"/> this is an app</div>
            <div><GoCode color="#364f6b"/> javascriptt</div>
            <div><GoRepoForked color="#364f6b"/>256</div>            
        </div>
    )
}
