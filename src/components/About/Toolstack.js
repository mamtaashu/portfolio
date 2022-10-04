import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  // SiPostman,
  SiHeroku,
  SiVercel,
} from "react-icons/si";
import {FaGithub} from "react-icons/fa";
import {SiPostman} from "react-icons/si";
import {SiReplit} from "react-icons/si";
import {SiVisualstudio} from "react-icons/si";
import {SiNetlify} from "react-icons/si";
import {SiCanva} from "react-icons/si"
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
       
      <Col xs={4} md={2} className="tech-icons">
        <FaGithub color="var(--bs-purple)" />
        <p style={{fontSize:25}}>Github</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman color="var(--bs-purple)" />
        <p style={{fontSize:25}}>Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudio color="var(--bs-purple)" />
        <p style={{fontSize:25}}>Visual Studio</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify color="var(--bs-purple)" />
        <p style={{fontSize:25}}>Netlify</p>
      </Col>
      

      <Col xs={4} md={2} className="tech-icons">
        <SiReplit color="var(--bs-purple)"/>
        <p style={{fontSize:25}}>Replit</p>
      </Col> 

      <Col xs={4} md={2} className="tech-icons">
        <SiCanva color="var(--bs-purple)"/>
        <p style={{fontSize:25}}>Canva</p>
      </Col> 

    </Row>
  );
}

export default Toolstack;
