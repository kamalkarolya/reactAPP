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
import FlareIcon from '@material-ui/icons/Flare';


const Header=()=> {
    return( <>
    
    <Navbar bg="dark" expand="lg"   >
  <Navbar.Brand  > <Link to="/"  className="link link-w" > Ultra Pro Max  <FlareIcon style={{color:"yellow"}}  /> </Link> </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <NavLink to="/" className="link link-w " >Home</NavLink>
      <NavLink to="/about" className="link link-w " >About</NavLink>
      <NavDropdown title="More" id="basic-nav-dropdown">
        <NavDropdown.Item > <Link to="/ott" className="link link-b" >OTT</Link> </NavDropdown.Item>
        <NavDropdown.Item>  <Link to="/login" className="link link-b " >Login</Link>  </NavDropdown.Item>
        <NavDropdown.Item > <Link to="/todo" className="link link-b " >Todo</Link>  </NavDropdown.Item>
        <NavDropdown.Item > <Link to="/user" className="link link-b " >User</Link>  </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item > <Link to="/pokemon" className="link link-b " >Pokemon</Link> </NavDropdown.Item>
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