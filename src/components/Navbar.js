import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-scroll";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
        <p style={{fontSize:"22px",color:"white", textDecoration:"none", fontWeight:"600", letterSpacing:"5px"}} className="img-fluid logo" alt="brand" > <Link style={{fontSize:"22px", fontWeight:"600", letterSpacing:"5px", color:"white", textDecoration:"none"}} to="homeSection" spy={true} smooth={true} activeClass="active">MK </Link></p>
        
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="about" spy={true} smooth={true}  style={{cursor:"pointer"}} onClick={() => updateExpanded(false)}>
                {/* <AiOutlineHome style={{ marginBottom: "2px" }} />  */}
                
                About
              </Nav.Link>
              {/* <Link to="about" spy={true} smooth={true}>About</Link> */}
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="techNavbar" spy={true} smooth={true}
                style={{cursor:"pointer"}}
                onClick={() => updateExpanded(false)}
              >
                {/* <AiOutlineUser style={{ marginBottom: "2px" }} /> */}
                 Skills
              </Nav.Link>
               {/* <Link >Skills</Link> */}
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                style={{cursor:"pointer"}}
                to="projectsNavbar" spy={true} smooth={true}
                onClick={() => updateExpanded(false)}
              >
                {/* <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "} */}
                Projects
              </Nav.Link>
               {/* <Link >Projects</Link> */}
            </Nav.Item>
            

            <Nav.Item>
              <Nav.Link
                as={Link}
                style={{cursor:"pointer"}}
                to="contactNavbar" spy={true} smooth={true}
                onClick={() => updateExpanded(false)}
              >
                {/* <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "} */}
                Contacts
              </Nav.Link>
              {/* <Link >Contacts</Link> */}
            </Nav.Item>
            <Nav.Item>
            {/* <button style={{marginTop:"5px" }} >   */}
            <a  target="_blank" href="https://drive.google.com/drive/u/1/folders/1DgHOpeLWvsPrTZxLtuCwwvV189Gxz8PE"><button style={{marginTop:"7px" }}>Resume</button></a>
            {/* <CgFileDocument style={{ marginBottom: "2px" }}  */}
            {/* Resume  */}
              {/* </button> */}
              </Nav.Item>

           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
