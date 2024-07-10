import { Container, Row, Col } from "react-bootstrap";
import logo from '../pro_image/img/images.jpeg';



export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
      <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/mohamed-osama-4049bb230/"><i class="fa-brands fa-linkedin-in"></i></a>
                <a href="https://www.facebook.com/profile.php?id=100012347140411"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/mohamedosama9903/"><i class="fa-brands fa-instagram"></i></a>    
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
export default  Footer;