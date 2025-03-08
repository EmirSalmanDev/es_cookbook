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
              <h4 className="footer_header">ES Cookbook</h4>
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
              <h4 className="footer_header">Food & Recipes</h4>
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
              <h4 className="footer_header">Our Links</h4>
              <div className="links">
                <a href="#">
                  <i class="bi bi-facebook"></i>
                </a>
                <a href="#">
                  <i class="bi bi-instagram"></i>
                </a>
                <a href="#">
                  <i class="bi bi-twitter-x"></i>
                </a>
                <a href="#">
                  <i class="bi bi-pinterest"></i>
                </a>
              </div>
            </Col>
          </Row>
          <Row className="copy_right">
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
