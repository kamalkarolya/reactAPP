import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Header=()=> {
    return( <>
    
    <Navbar bg="light" expand="lg"  >
  <Navbar.Brand to="/" >Ultra Pro Max<i style={{color:"yellow"}}  className="bi bi-stars"></i></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <NavLink to="/" className="link" >Home</NavLink>
      <NavLink to="/about" className="link" >About</NavLink>
      <NavDropdown title="More" id="basic-nav-dropdown">
        <NavDropdown.Item > <Link to="/ott" className="link" >OTT</Link> </NavDropdown.Item>
        <NavDropdown.Item> Another action </NavDropdown.Item>
        <NavDropdown.Item > Something </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
     </>)

}

export default Header;