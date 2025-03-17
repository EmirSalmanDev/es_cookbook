import "../styles/recipe.css";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { useEffect } from "react";

function CinnamonRoll() {
  useEffect(() => {
    const scrollTimeout = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);

    return () => clearTimeout(scrollTimeout);
  }, []);
  return (
    <>
      <Container className="my-5">
        <Card className="shadow-lg p-4 recipe-card">
          <Card.Body>
            <Card.Title className="text-center recipe-title">
              CINNAMON ROLL RECIPE
            </Card.Title>

            <Row className="mt-4">
              <Col>
                <h3 className="section-title">Dough Ingredients</h3>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    200ml (1 cup) cream, room temperature
                  </ListGroup.Item>
                  <ListGroup.Item>330g (3 cups) flour</ListGroup.Item>
                  <ListGroup.Item>40g (2 tbsp) granulated sugar</ListGroup.Item>
                  <ListGroup.Item>1 medium egg</ListGroup.Item>
                  <ListGroup.Item>
                    6g (1 heaping tsp) instant yeast
                  </ListGroup.Item>
                  <ListGroup.Item>1/4 tsp salt</ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>

            <Row className="mt-4">
              <Col>
                <h3 className="section-title">Filling Ingredients</h3>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    60g (2 tbsp) butter, room temperature
                  </ListGroup.Item>
                  <ListGroup.Item>100g (1/2 cup) brown sugar</ListGroup.Item>
                  <ListGroup.Item>1 tsp ground cinnamon</ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>

            <Row className="mt-4">
              <Col>
                <h3 className="section-title">Glaze Ingredients</h3>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    100g cream cheese (or labneh), room temperature
                  </ListGroup.Item>
                  <ListGroup.Item>100g (1/2 cup) powdered sugar</ListGroup.Item>
                  <ListGroup.Item>1 packet vanilla sugar</ListGroup.Item>
                  <ListGroup.Item>35ml (2 tbsp) milk</ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>

            <Row className="mt-4">
              <Col>
                <h3 className="section-title">How to Make the Dough</h3>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    Whisk the instant yeast, egg, and sugar together.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Add the room-temperature cream and mix.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Gradually add the flour and mix until a dough forms.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Knead for 5 minutes until smooth.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Let rise at room temperature for 1 hour (or 1.5-2 hours if
                    the room is cold).
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>

            <Row className="mt-4">
              <Col>
                <h3 className="section-title">Shaping & Baking</h3>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    Mix butter, brown sugar, and cinnamon until spreadable.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Roll the dough into a 0.5 cm thick rectangle.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Evenly spread the filling over the dough.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Roll the dough into a log shape.
                  </ListGroup.Item>
                  <ListGroup.Item>Cut into 8-9 equal pieces.</ListGroup.Item>
                  <ListGroup.Item>
                    Place rolls in a greased 20x20 cm baking dish, filling side
                    up.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Let rise for another 30 minutes.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Bake in a preheated oven at 180°C (without fan) for 25-30
                    minutes.
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>

            <Row className="mt-4">
              <Col>
                <h3 className="section-title">How to Make the Glaze</h3>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    Mix powdered sugar, cream cheese, and vanilla sugar.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Add milk and whisk until smooth.
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>

            <Row className="mt-4">
              <Col>
                <h3 className="section-title">Final Assembly</h3>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    Pour the glaze over the rolls immediately after baking.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Enjoy your warm, fluffy cinnamon rolls!
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default CinnamonRoll;
