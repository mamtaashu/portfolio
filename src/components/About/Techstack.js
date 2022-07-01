import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiHTML,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";
import {  FaHtml5} from "react-icons/fa";
import {FaCss3Alt} from "react-icons/fa"
import {FaJs} from "react-icons/fa";
import {FaReact} from "react-icons/fa";
import {FaGithub} from "react-icons/fa"

import { AiFillDownCircle } from "react-icons/ai";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5/>
    
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3Alt />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaJs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGithub />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
      </Col> */}
    </Row>
  );
}

export default Techstack;
