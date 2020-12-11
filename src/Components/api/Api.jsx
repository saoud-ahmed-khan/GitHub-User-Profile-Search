import React, { useState, useEffect } from 'react'
import axios from "axios";
const clientid="e3e32ae9be7965810fd8"
const clientsecret = "6a849e449abd22ce2727d326bffe5db5547d1d42"
export function Api(props) {
    const [post, setPost] = useState({})
    const [repos, setrepos] = useState([]);
    const [url, seturl] = useState("saoud-ahmed-khan")
    useEffect(() => {
        axios.get(`https://api.github.com/users/${url}?clientId=${clientid}&clientSecret=${clientsecret}`)
            .then((res) => { setPost(res.data) })
            .catch((e) => { console.log(e); })
    }, [url])

    useEffect(() => {
        axios.get(`https://api.github.com/users/${url}/repos?clientId=${clientid}&clientSecret=${clientsecret}`)
            .then((res) => { setrepos(res.data) })
            .catch((e) => { console.log(e); })
    }, [url])
    return { post, seturl, repos , url}
}
