import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import "../styles/contact.css";

function Contact() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    const form = e.target;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      setValidated(true);
    } else {
      e.preventDefault();
      form.reset();
      setValidated(false);
    }
  };

  return (
    <>
      <div className="contact-form">
        <Container className="my-5">
          <Row className="justify-content-center">
            <Col xs={12} md={8} lg={6} className="form-box">
              <h2 className="text-center mb-4">Contact Us</h2>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group controlId="formName" className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Your name" required />
                  <Form.Control.Feedback type="invalid">
                    Please enter your name.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Your email"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a valid email.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formMessage" className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Enter message"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Message cannot be empty.
                  </Form.Control.Feedback>
                </Form.Group>

                <Button type="submit" className="custom-btn w-100">
                  Send
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Contact;
