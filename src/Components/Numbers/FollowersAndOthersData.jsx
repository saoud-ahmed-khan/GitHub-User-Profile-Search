import React from 'react'
import "./Followers.css"
export function Followersandothersdata({ pic, text, number }) {
  
    return (
        <div className="follower-main">
            <div className="followers-logo">
                {pic}
            </div>
            <div>
                <div className="follower-num">{number?number:"..." }</div>
                <div className="follower-text">{text}</div>

            </div>
        </div>
    )
} 
