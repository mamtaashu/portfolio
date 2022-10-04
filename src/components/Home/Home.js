import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <div id="homeSection">
      <section >
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Meenu Katariya</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <h3> I am a passionate Full Stack Web developer who focuses on developing clean and user-friendly applications using  </h3>

                <Type />
                {/* <h3>and some other cool libraries and frameworks.</h3> */}
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20}}>
              <img  
                  src="https://c.tenor.com/7tlM7VOBit8AAAAC/night-tutorials-indo-hanging-light.gif"
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px", borderRadius:"60px" ,marginTop:"100px" }}
              />
            </Col>
            
          </Row>
           
        </Container>
      </Container>
      
      <Home2 />
    </section>
    </div>
  );
}

export default Home;
