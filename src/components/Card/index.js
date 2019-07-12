import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div
            role="img"
            onClick={() => props.handleClick(props.id)}
            style={{ backgroundImage: `url("${props.image}")` }}
            className={`card${props.shake ? " shake" : ""}`}
        />
    )
}
export default Card;