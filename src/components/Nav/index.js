import React from "react";
import "./style.css";
import {
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col
} from "reactstrap";
function Nav2(props) {
    return (
        <Navbar className="bg-primary" expand="lg">
            <NavbarBrand onClick={e => e.preventDefault()}>
                Aqua Teen Hunger Click
            </NavbarBrand>
            <Nav className="Nav ml-auto" navbar>
                <NavItem>
                    Score: {props.score} 
                </NavItem>
            </Nav>
            <Nav className="rightNav ml-auto" navbar>
                <NavItem>
                    High Score: {props.topScore}
                </NavItem>
            </Nav>
        </Navbar>
    )
}

export default Nav2;