import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/footer.css";

function Footer() {
  return (
    <>
      <footer>
        <Container>
          <Row className="g-4">
            <Col sm={4} className="text-center">
              <h4 className="footer-header">ES Cookbook</h4>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Sponsored Content</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </Col>
            <Col sm={4} className="text-center">
              <h4 className="footer-header">Food & Recipes</h4>
              <ul>
                <li>
                  <a href="#">Sugar Free</a>
                </li>
                <li>
                  <a href="#">Meal Prep Recipes</a>
                </li>
                <li>
                  <a href="#">Quick and Easy</a>
                </li>
                <li>
                  <a href="#">Vegan Recipes</a>
                </li>
              </ul>
            </Col>
            <Col sm={4} className="text-center">
              <h4 className="footer-header">Our Links</h4>
              <div className="links">
                <a href="#">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#">
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a href="#">
                  <i className="bi bi-pinterest"></i>
                </a>
              </div>
            </Col>
          </Row>
          <Row className="copy-right">
            <Col>
              <p className="text-center">
                &copy; 2025 ES Cookbook. All Rights Reserved
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
