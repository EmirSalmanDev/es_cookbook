import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import "../styles/navbar.css";

function CookBookNavbar() {
  return (
    <>
      <Navbar expand="md" className="nav">
        <Container>
          <Navbar.Brand>
            <Link to="/">ES Cookbook</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/aboutMe">
                About
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="nav-footer">
        <Container>
          <Row>
            <Col>
              <div className="nav-footer-text">
                <span>Simple recipes made for</span>
                <em>easy, actual, everyday life.</em>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CookBookNavbar;
