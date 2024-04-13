import { Container, Row, Col } from "react-bootstrap";
import logoGp from "../assets/img/gp-logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logoGp} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/gabriel-puebla/" target="blanck_"><img src={navIcon1} alt="LinkedIn " /></a>
                <a href="https://github.com/GPuebla" target="blanck_"><img src={navIcon4} alt="GitHub Icon" /></a>
              </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
