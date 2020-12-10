import React from 'react'
import { GoRepo } from "react-icons/go";
import { GoCode } from "react-icons/go";
import { GoRepoForked } from "react-icons/go";
import "./repos.css"





export function Renderingrepo({ reponame, language, fork }) {


    return (
        <div className="rendering-repo-main">
            <div className="reponame"><GoRepo color="#364f6b" /> {reponame}</div>
            <div className="repolanguage"><GoCode color="#364f6b" /> {language}</div>
            <div className="star"> <GoRepoForked color="#364f6b" /> {fork}</div>
        </div>
    )
}
