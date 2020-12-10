import React,{createContext} from 'react'
import { Api } from "../api/Api";


export const Contextdata= createContext();
export function Contextprovider({children}) {
    const {post,repos,seturl}=Api();
    console.log(post);
    console.log(repos);

    return (
        <Contextdata.Provider value={{post,repos,seturl}}>
            {children}
        </Contextdata.Provider>
    )
}

