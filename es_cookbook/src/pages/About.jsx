import { Container, Row, Col } from "react-bootstrap";
import "../styles/about.css";

function About() {
  return (
    <>
      <div className="about-me">
        <Container>
          <Row>
            <Col>
              <p>
                This is just a small Bootstrap and React.js project, so the
                website doesn’t have much for now.
              </p>
              <p>
                This page is pretty simple and empty, but the recipes you'll
                find here are the real ones I’ve actually used (and still do) in
                real life. No unnecessary extras—just the dishes I genuinely
                enjoy and cook. Feel free to try them out!
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default About;
