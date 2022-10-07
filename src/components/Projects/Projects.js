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
import dice from "../../Assets/Projects/dice.jpeg"
import sudoku from "../../Assets/Projects/sudoku.png"
import githubRepo from "../../Assets/Projects/githubRepo.png"
import todo from "../../Assets/Projects/todo.png"
import anthropologie from "../../Assets/Projects/anthropologie.png";
import movie from "../../Assets/Projects/movie.png"
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
                 imgPath={githubRepo}
              isBlog={false}
              title="Github - Repository Finder"
              description="  A search engine using github search api which allows you to search for repositories.
               TOOL STACK : HTML | CSS | JavaScript | React | Axios. Individual Project built by me in 1 day. Features : Search for repositories, sort according to thr date, last updated, pagination and repositories per page limit control.
                 "
              ghLink="https://github.com/mamtaashu/Github-finder"
              demoLink="https://github-repo-finder-roan.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                 imgPath={todo}
              isBlog={false}
              title="Todo - App"
              description="A web application for making todo, delete todo .
               TOOL STACK : React | Redux | Json-Server. Individual Project built by me in 1 day. Features : Signup | Login | Add todo.
                 "
              ghLink="https://github.com/mamtaashu/todo_react_redux"
              demoLink="https://todo-teal-alpha.vercel.app/todo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                 imgPath={sudoku}
              isBlog={false}
              title="Sudoku Solver"
              description="  Here you can solve Sudoku just give your unsolved sudoku to thr app and then click on solve and its done.
               TOOL STACK : React. Individual Project built by me in 1 day. Features : Create a random sudoku puzzle | solve any sudoku puzzle | reset sudoku  .
                 "
              ghLink="https://github.com/mamtaashu/Sudoku-app"
              demoLink="https://sudoku-solver-by-akash.netlify.app/"           />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                 imgPath={dice}
              isBlog={false}
              title="Dice - Roll"
              description="  Here you can roll the dice and get the winner who has maximum number.
               TOOL STACK : HTML | CSS | JavaScript. Individual Project built by me in 1 day. Features : Roll the dice and get the winner with maximum number.
                 "
              ghLink="https://github.com/mamtaashu/how-js-works"
              demoLink="https://glittering-sprite-03cbe2.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                 imgPath={movie}
              isBlog={false}
              title="Movie - Search"
              description="  Here you can search the movie.
               TOOL STACK : HTML | CSS | JavaScript. Individual Project built by me in 1 day. Features : Signup | Login | Search Movie.
                 "
              ghLink="https://github.com/mamtaashu/search_movie_app"
              demoLink="https://fantastic-madeleine-920159.netlify.app/"
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
