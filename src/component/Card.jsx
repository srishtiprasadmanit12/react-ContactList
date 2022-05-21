import React from "react";
import Avatar from "./Avatar"
import Details from "./Details"

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar image={props.imgURL}/>
        
      </div>
      <div className="bottom">
      <Details detailInfo={props.Phone}/>
      <Details detailInfo={props.Email}/>
      </div>
    </div>
  );
}

export default Card;