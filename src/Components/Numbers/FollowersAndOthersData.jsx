import React from 'react'
import CountUp from 'react-countup';
import "./Followers.css"
export function Followersandothersdata({ pic, text, number }) {


    return (
        <div className="follower-main">
            <div className="followers-logo">
                <{pic}/>
            </div>
            <div>
                <div><CountUp className="follower-num" start={0} end={number} duration={4} /></div>
                <div className="follower-text">{ text}</div>

            </div>
        </div>
    )
} 
