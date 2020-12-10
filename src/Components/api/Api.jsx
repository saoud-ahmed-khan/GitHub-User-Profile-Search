import React, { useState, useEffect } from 'react'
import axios from "axios";

export function Api(props) {
    const [post, setPost] = useState({})
    const [repos, setrepos] = useState([]);
    const [url, seturl] = useState("saoud-ahmed-khan")
    useEffect(() => {
        axios.get(`https://api.github.com/users/${url}`)
            .then((res) => { setPost(res.data) })
            .catch((e) => { console.log(e); })
    }, [])

    useEffect(() => {
        axios.get(`https://api.github.com/users/${url}/repos`)
            .then((res) => { setrepos(res.data) })
            .catch((e) => { console.log(e); })
    }, [])
    return { post, seturl, repos }
}
