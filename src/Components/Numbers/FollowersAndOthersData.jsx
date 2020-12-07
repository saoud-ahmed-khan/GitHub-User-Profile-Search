import React from 'react'
import CountUp from 'react-countup';
import "./Followers.css"

import { BsPeopleFill } from "react-icons/bs";
export function Followersandothersdata() {


    return (
        <div className="follower-main">
            <div className="followers-logo">
                <BsPeopleFill color="#364f6b" size="4vw"/>
            </div>
            <div>
                <div><CountUp className="follower-num" start={0} end={20} duration={4} /></div>
                <div className="follower-text">FOLLOWERS</div>
                
            </div>
        </div>
    )
} 
