import { Container, Row, Col, Tab, Nav, Button } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/projImg2-bookSearch.png";
import projImg3 from "../assets/img/projImg3-sitePlan.png";
import projImg4 from "../assets/img/projImg4-CMWebsite.png";
import projImg5 from "../assets/img/projImg5-webCV.png";
import projImg6 from "../assets/img/projImg6-calculator.png";
import prog2 from "../assets/img/prog-2.svg"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import { Technology } from "./Technology";
import  htmllogo  from "../assets/img/html-logo.svg"
import  jslogo  from "../assets/img/js-logo.svg"
import  reactlogo from "../assets/img/react-logo.svg"
import csslogo from "../assets/img/css-logo.svg"
import OtherExper from "./OtherExper"

export const Projects = () => {

  const technologies = [
    {
      title:"JavaScript",
      description:"+ 2 years of experience",
      imgUrl: jslogo,
    },
    {
      title:"React",
      description:"+ 6 months of experience",
      imgUrl: reactlogo,
    },
    {
      title:"HTML",
      description:"+ 2 years of experience",
      imgUrl: htmllogo,
    },
    {
      title:"CSS",
      description:"+ 2 years of experience",
      imgUrl: csslogo,
    },
    {
      title:"JavaScript",
      description:"+ 2 years of experience",
      imgUrl: jslogo,
    },
    {
      title:"React",
      description:"+ 6 months of experience",
      imgUrl: reactlogo,
    },
    {
      title:"HTML",
      description:"+ 2 years of experience",
      imgUrl: htmllogo,
    },
    {
      title:"CSS",
      description:"+ 2 years of experience",
      imgUrl: csslogo,
    }

  ] 

  const projects = [
    {
      title: "Chamber Of Commerce",
      description: "Design & Development",
      imgUrl: projImg1,
      link:"https://gpuebla.github.io/wdd230/chamber/index.html",
    },
    {
      title: "Book Search",
      description: "Applying API Search and Filtering",
      imgUrl: projImg2,
      link:"https://gpuebla.github.io/cse121b/project.html",
    },
    {
      title: "Web Site Planner",
      description: "Content, Colors, Structure, Fonts, etc.",
      imgUrl: projImg3,
      link:"https://gpuebla.github.io/WDD130/ennari/site-plan.html",
    },
    {
      title: "Community Manager Site",
      description: "Applying Site Plan",
      imgUrl: projImg4,
      link:"https://gpuebla.github.io/WDD130/ennari/index.html",
    },
    {
      title: "Web Curriculum Vitae",
      description: "CSS, Grid, Color Contrast, etc.",
      imgUrl: projImg5,
      link:"https://gpuebla.github.io/my_cv_responsive/",
    },
    {
      title: "IMC Calculator",
      description: "DOM manipulation, CSS, etc",
      imgUrl: projImg6,
      link:"https://gpuebla.github.io/",
    }
]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>My Experience</h2>
                <p>A seasoned professional with diverse expertise beyond web development. Explore my portfolio showcasing projects, technologies, and more. Let my work speak to the depth of my skills and experience.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first" style={{cursor:'pointer'}}>Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second" style={{cursor:'pointer'}}>Technologies</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third" style={{cursor:'pointer'}}>Not All Is Code</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                              
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second" >
                      <section className="technologies-section">
                        <img 
                          className="img-prog"
                          src={prog2}
                        />
                        <h2>
                          Technologies
                        </h2>
                        <ul className="tech-list">
                          {
                          technologies.map((tech,index) => {
                              return(
                                <Technology 
                                  key={index}
                                  {...tech}
                                />
                              )
                            })
                          }
                        </ul>
                      </section>

                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <OtherExper/>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
