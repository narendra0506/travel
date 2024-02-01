
import { NavLink } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./header.css"

function Header() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#">Volvo Tours & Travels</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink className='nav-link' to={"/"}>Home</NavLink>
            <NavLink className='nav-link' to={"/about"}>About</NavLink>
            <NavLink className='nav-link' to={"/contact"}>Contact</NavLink>
            <NavLink className='nav-link' to={"/register"}>Register</NavLink>
            <NavLink className='nav-link' to={"/exams"}>Exams</NavLink>
            <NavLink className='nav-link' to={"/login"}>Login</NavLink>
            
            {/* <NavLink className='nav-link' to={"/form"}>Form</NavLink>
            <NavLink className='nav-link' to={"/formlogin"}>FormLogin</NavLink> */}

            
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;