import React from "react";
import "./style.css";

function Content(props) {
    return <main className="content">{props.children}</main>;
}

export default Content;