import React from 'react'
import axios from 'axios'
export function Contextprovider(props) {
    
    const [post,setPost] = React.useState({}); 
    React.useEffect(()=>{
        axios.get("https://api.github.com/users/saoud-ahmed-khan")
        .then((res)=>{setPost(res.data)})
        .catch((e)=>{console.log(e);})
    },[])
    console.log(post.name);
    return (
        <div>
            
        </div>
    )
}
