import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import licious  from "../../Assets/Projects/licious.png"
import discoveryPlus  from "../../Assets/Projects/discoveryPlus.png"
import imdb from "../../Assets/Projects/imdb.png";
import anthropologie from "../../Assets/Projects/anthropologie.png";
function Projects() {
  return (
   <div id="projectsNavbar">
     <Container fluid className="project-section"  >
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
           
        <Col md={4} className="project-card">
            <ProjectCard
                 imgPath={imdb}
              isBlog={false}
              title="IMDb - Clone"
              description="   A web application in which user can watch movies trailers, give ratings to trailers. 
              Tools : React | Redux | JSON-Server | Material-Ui | Styled Components 
              A collaborative project built by a team of 4, executed in a week.
              Features : Signup, Login, Google Signup, Login Integration,
              Watch Trailers, Watchlist,
              Clear Watchlist History,
              Rating Trailers,
              Filter and sorting movies. "
              ghLink="https://github.com/MeenuKatariya/imdbclone"
              demoLink="https://62f1166bb465cf7b970869f9--imdbclone-masai.netlify.app/"
            />
          </Col>
          
          
          
          
          <Col md={4} className="project-card">
            <ProjectCard
                 imgPath={licious}
              isBlog={false}
              title="Licious - Clone"
              description="   A web application in which user can order online food. 
              Tools : HTML | CSS | JavaScript. 
              A collaborative project built by a team of 5,executed in a week.
              Features : Users can login to the website.
                         The users can can select the food items and add it to cart.
                         Users can order  online food."
              ghLink="https://github.com/MeenuKatariya/licious-clone.git"
              demoLink="https://bright-tapioca-98b677.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={discoveryPlus}
              isBlog={false}
              title="Discover Plus - Clone"
              description="A web application in which user can watch serial, movies. Tool Stack: HTML | CSS | JavaScript | JSON-Server. A collaborative project built by a team of 5, executed in a week.&nbsp Features : Users can register and login to the website, watch videos. Users can take premium for particular videos."
              ghLink="https://github.com/MeenuKatariya/Discovery-Clone"
              demoLink="https://officialsiddharthbisht.github.io/Discovery-Clone/"
            />
          </Col>
         
          <Col md={4} className="project-card">
            <ProjectCard
                 imgPath={anthropologie}
              isBlog={false}
              title="Anthropologie - Clone"
              description="  A web application for buying ladies clothes. Tech Stack :  React | Redux | JSON Server | Styled Components | Material-Ui. Collaboration with 3 team members completed the project in seven days. Features :
              Signup, Login,
              All Products Page - with Filter & Sort Functionality,
              Single Product Page (dynamic),
              Add To Cart Feature,
              Checkout, Payment along with all Functionality.
                 "
              ghLink="https://github.com/MeenuKatariya/Anthropologie"
              demoLink="https://anthropologie1.netlify.app/"
            />
          </Col>




          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          Collaboration with two team members completed the project 
in seven days.
Tech Stack :  React | Redux | JSON Server | Styled Components | Material-Ui 
Features :
Signup | Login
All Products Page - with Filter & Sort Functionality
Single Product Page (dynamic) 
Add To Cart Feature
Checkout | Payment along with all Functionality
Areas of responsibility
Lead the team and Manage the Project
Develop Backend for Web App
Develop Single Product Page
Develop Add to Cart Functionality
Develop Payment Page
A web application for buying ladies clothes.

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="h"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
   </div>
  );
}

export default Projects;
