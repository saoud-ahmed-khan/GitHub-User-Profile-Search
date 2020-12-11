import React,{createContext} from 'react'
import { Api } from "../api/Api";


export const Contextdata= createContext();
export function Contextprovider({children}) {
    const {post,repos,seturl,url}=Api();
   

    return (
        <Contextdata.Provider value={{post,repos,seturl,url}}>
            {children}
        </Contextdata.Provider>
    )
}

