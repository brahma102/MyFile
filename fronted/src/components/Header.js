import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom"
import AuthConsumer from "../hooks/auth";
import Home from './Home'

const Header = () => {
    const[authed,dispatch] = AuthConsumer()
    return (
        <>
        <div>
  <Navbar bg="dark" variant="dark" style={{height:"60px"}}>
                <Container>
                    <NavLink to="/home" className="text-decoration-none text-light mx-2">Navbar</NavLink>
                    <Nav className="me-auto mr-5">
                        <NavLink to="/upload" className="text-decoration-none text-light mx-2">Upload</NavLink>
                    </Nav>
                    <Nav className=" text-right">
                        <NavLink to="/" className="text-decoration-none  text-light mx-2">Logout</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
        <div>
            <Home/>
        </div>
          
        </>
    )
}

export default Header