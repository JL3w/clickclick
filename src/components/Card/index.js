import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

function card(props) {
    return (
        <div>
            <img 
                className="img-circle img-no-padding img-responsive"
                src={`require("${props.image}")`}
            />
        </div>
    )
}