import React from "react"
import ReactDOM from "react-dom"

function Card(props){
    return(
    <div>
            <h2>{props.name}</h2>
            <img
                src={props.imgURL}
                alt="avatar_img" />
       <div className="bottom">
                <p>{props.Phone}</p>
                <p>{props.Email}</p>
            </div>
        </div>
    )
}
export default Card ;