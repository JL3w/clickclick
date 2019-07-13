import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div
            className="card"
            role="img"
            style={{ backgroundImage: `url("${props.image}")` }}
            onClick={() => props.cardClick(props.id)}            
        />
    )
}
export default Card;