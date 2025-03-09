import React from "react";

const UserCard = (props) => {
    return (
    <div>
        <img className = "img" src = {props.data.picture.large} alt = "user-image"/>
        <h1> {props.data.name.first}</h1>
        <h2> {props.data.gender} </h2>
        <p>{props.data.phone}</p>
        <p>{props.data.location.city},{props.data.location.state}</p>
        <hr></hr>
        <hr></hr>
    </div>
    );
}

export default UserCard;