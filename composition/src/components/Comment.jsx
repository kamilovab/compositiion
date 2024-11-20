import React from "react"
import './Comment.css'
import Userinfo from "./Userinfo"
import Date from "./Date"

const Comment = (props) => {

    return (
        <div className="comment">
            <Userinfo author={props.author}/>
            <div className="comment-text">
                {props.text}
            </div>
            <Date date = {props.date}/>
        </div>
    )
}

export default Comment