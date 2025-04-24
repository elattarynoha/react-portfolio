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

function Projects() {
  return (
    <Container fluid className="project-section">
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
              imgPath={chatify}
              isBlog={false}
              title="gestioncommerciale"
              description="Personal site web cote admin et client pour les produits cosmetiques , realise par Javascript , php ,html css et bootstrap."
              ghLink="https://github.com/elattarynoha/gestioncommerciale"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Jeux d'apprentissage d'amazigh"
              description="Des jeux web pour les eleves pour l'apprentissage des langues amazigh, tarifit et tachelhit avec html5, css, javascript"
              ghLink="https://github.com/elattarynoha/jeuxamazigh"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Restaurant wordpress"
              description="Plateforme personnel de restaurant salnaila qui offre des differents repas , avec wordpress"
              ghLink="https://github.com/elattarynoha/restaurantWordpress"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
