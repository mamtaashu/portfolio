import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
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
          <p style={{fontSize:"22px", fontWeight:"600", letterSpacing:"5px"}} className="img-fluid logo" alt="brand" >MK</p>
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
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                {/* <AiOutlineHome style={{ marginBottom: "2px" }} />  */}
                Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                {/* <AiOutlineUser style={{ marginBottom: "2px" }} /> */}
                 About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                {/* <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "} */}
                Projects
              </Nav.Link>
            </Nav.Item>
            

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact"
                onClick={() => updateExpanded(false)}
              >
                {/* <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "} */}
                Contacts
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <button style={{marginTop:"5px"}}>  <a href="https://drive.google.com/file/d/1wx37Bx3DGd4YvjHPWD-io1UxgXR6XsM7/view?usp=sharing"></a>
            {/* <CgFileDocument style={{ marginBottom: "2px" }}  */}
            Resume 
              </button>
              </Nav.Item>

           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
