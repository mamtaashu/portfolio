import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
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
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src="https://t4.ftcdn.net/jpg/04/40/03/73/360_F_440037301_xI59ve0rg2gtWdLY8KT93gqJsbfDivcV.jpg"
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px", borderradius:"20px" }}
              />
            </Col>
            
          </Row>
           
        </Container>
      </Container>
      
      <Home2 />
    </section>
  );
}

export default Home;
