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
import {SiExpress} from "react-icons/si"
import {SiRedux} from "react-icons/si";
import {SiMongodb} from "react-icons/si"
import {SiChakraui} from "react-icons/si"
import {SiMaterialui} from "react-icons/si"
import {SiStyledcomponents} from "react-icons/si";
import {FaNodeJs} from "react-icons/fa"




import { AiFillDownCircle } from "react-icons/ai";

function Techstack() {
  return (
    <div>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}  >
      {/* <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5 color="var(--bs-purple)"/>
        <p style={{fontSize:25}}>HTML</p>

      
    
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3Alt color="var(--bs-purple)" />
        <p style={{fontSize:25}}>CSS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaJs color="var(--bs-purple)" />
        <p style={{fontSize:25}}>JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaReact color="var(--bs-purple)" />
        <p style={{fontSize:25}}>React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < SiRedux color="var(--bs-purple)" />
        <p style={{fontSize:25}}>Redux</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        < FaNodeJs color="var(--bs-purple)" />
        <p style={{fontSize:25}}>Node JS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < SiMongodb color="var(--bs-purple)" />
        <p style={{fontSize:25}}>MongoDb</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < SiExpress color="var(--bs-purple)" />
        <p style={{fontSize:25}}>Express</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
     <SiMaterialui color="var(--bs-purple)" />
<p style={{fontSize:25}}>Material ui</p>
</Col>
<Col xs={4} md={2} className="tech-icons">
<SiChakraui color="var(--bs-purple)" />
<p style={{fontSize:25}}>Chakra ui</p>
</Col>
<Col xs={4} md={2} className="tech-icons">
<SiStyledcomponents  color="var(--bs-purple)"/>
<p style={{fontSize:25}}>Styled components</p>
</Col>
{/* <Col xs={4} md={2} className="tech-icons">
<SiStyledcomponents  color="var(--bs-purple)"/>
<p style={{fontSize:25}}>Node Js</p>
</Col>  */}
    </Row>
    </div>
  );
}

export default Techstack;
