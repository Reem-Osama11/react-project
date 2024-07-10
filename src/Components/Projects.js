import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../pro_image/img/walling-JYoWTJMJNFo-unsplash.jpg";
import projImg2 from "../pro_image/img/felipe-furtado-2zDXqgTzEFE-unsplash.jpg";
import projImg3 from "../pro_image/img/anete-lusina-2JknzBYDu6k-unsplash.jpg";
import colorSharp2 from "../pro_image/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
    ];

    return (
    <section className="project" id="projects">
        <Container>
            <Row>
                <Col size={12}>
                    <TrackVisibility>
                    {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                        <h2>Projects</h2>
                        <p>My name is Mohamed Osama,i live in Banisuef.this is 1st proj in react</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">1st section</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">2end section</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">3rd section</Nav.Link>
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
                                <Tab.Pane eventKey="section"><p>My name is Mohamed Osama,i live in Banisuef.this is 1st proj in react</p></Tab.Pane> <Tab.Pane eventKey="third"><p>My name is Mohamed Osama,i live in Banisuef.this is 1st proj in react</p></Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </div>}
                    </TrackVisibility>
                </Col>
            </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2} alt="Imagess"></img>
        </section>
    )
}


export default Projects;