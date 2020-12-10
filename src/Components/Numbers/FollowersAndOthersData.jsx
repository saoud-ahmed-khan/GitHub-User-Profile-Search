import React from 'react'
import "./Followers.css"
export function Followersandothersdata({ Icon, text, number }) {
 
    return (
        <div className="follower-main">
            <div className="followers-logo">
                {<Icon color="#364f6b" size="3.3vw" />}
            </div>
            <div>
                <div className="follower-num">{number?number:"0"}</div>
                <div className="follower-text">{text}</div>

            </div>
        </div>
    )
} 
