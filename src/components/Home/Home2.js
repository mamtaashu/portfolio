import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
               <span className="purple"> </span>  ABOUT MYSELF
            </h1>
            <p className="home-about-body">
            🏡 I am from Sonipat, Haryana.
              <br />
              <br /> 🤝I think of myself as a people person.
              <i>
                <b className="purple">  </b>
              </i>
              <br />
              <br />
              ❤️ I love designing websites and I am looking for more opportunities to work in coding.
              <i>
                <b className="purple"> </b> 
              
                <b className="purple">
                
                </b>
              </i>
              <br />
              <br />
              🤗  Passion-driven learner and a web developer with the ability to write clean, reusable, optimised code. Skilled and experienced at building and maintaining MERN based web applications. Looking forward to joining a progressive and challenging work environment.
               <b className="purple"></b>
              <i>
                <b className="purple">
                  {" "}
                  
                </b>
              </i>
              &nbsp; 
              <i>
                <b className="purple"> </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src="/meenu.jpeg" style={{borderRadius:"50%", transform:"scale(0.8)"}} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        {/* <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/MeenuKatariya"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
              <a
                  href="https://www.linkedin.com/in/meenu-katariya/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a> 
              </li>
              <li className="social-icons">
                 
              </li>
              <li className="social-icons">
                
              </li>
            </ul>
          </Col>
        </Row> */}
      </Container>
    </Container>
  );
}
export default Home2;
