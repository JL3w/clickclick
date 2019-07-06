import React from "react";
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
function Nav2() {
    return (
        <Navbar className="bg-primary" expand="lg">
            <NavbarBrand onClick={e => e.preventDefault()}>
                Click Click
            </NavbarBrand>
            <Nav className="mr-auto" navbar>
                <NavItem>
    
                </NavItem>
            </Nav>
        </Navbar>
    )
}

export default Nav2;