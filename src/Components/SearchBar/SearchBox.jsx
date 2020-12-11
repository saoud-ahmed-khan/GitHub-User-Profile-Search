import "./SearchBox.css"
import React,{useContext} from 'react'
import { Contextdata } from "../Context/ContextProvider";

export function Searchbox() {
let data= useContext(Contextdata)
let {seturl,url}= data
const [name,Setname]=React.useState("")
console.log(name);
console.log(url);
    return (
        <div className="search-main">
            <div className="search-input">
                <input name="nameid" value={name} onChange={(e)=>Setname(e.target.value)} placeholder="GitHub login name" />
            </div>
            <div>
                <button className="button" onClick={()=>{seturl(name)}}>SEARCH</button>
            </div>

        </div>
    )
}
