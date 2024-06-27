import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./Header.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
    const userDetails = JSON.parse(localStorage.getItem("userDetails"));
    // const userDetails1 = useSelector(state=>state.userDetails)
    const Logout = () => {
        localStorage.clear("userDetails")
    }
    // console.log("userDetails1", userDetails1);
    return (
        <Navbar bg="light" data-bs-theme="light" sticky="top">
            <Container>
                <NavLink to="mobile" className="navbar-brand">
                    <img src="/logo.svg" alt="logo" />
                </NavLink>
                <Nav>
                    <NavDropdown className="text-capitalize" title={`Hello ${userDetails && userDetails.name} - ${userDetails && userDetails.role}`} id="basic-nav-dropdown">
                        <NavLink className="dropdown-item" to="login" onClick={()=>Logout()}>Logout</NavLink>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}