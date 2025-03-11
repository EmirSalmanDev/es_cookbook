import "../styles/recipe.css";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

function WetCake() {
  return (
    <>
      <Container className="my-5">
        <Card className="shadow-lg p-4 recipe-card">
          <Card.Body>
            <Card.Title className="text-center recipe-title">
              WET CAKE RECIPE
            </Card.Title>

            <Row className="mt-4">
              <Col>
                <h3 className="section-title">Ingredients</h3>
                <ListGroup variant="flush">
                  <ListGroup.Item>4 medium or 3 large eggs</ListGroup.Item>
                  <ListGroup.Item>320g (1 + 3/4 cups) sugar</ListGroup.Item>
                  <ListGroup.Item>
                    500ml (2.5 cups) milk (2 cups if using a larger pan)
                  </ListGroup.Item>
                  <ListGroup.Item>200ml (1 cup) sunflower oil</ListGroup.Item>
                  <ListGroup.Item>
                    50g (approximately 3/4 cup) cocoa powder
                  </ListGroup.Item>
                  <ListGroup.Item>220g (2 cups) flour</ListGroup.Item>
                  <ListGroup.Item>1 packet baking powder</ListGroup.Item>
                  <ListGroup.Item>A pinch of salt</ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>

            <Row className="mt-4">
              <Col>
                <h3 className="section-title">Instructions</h3>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    Whisk the eggs and sugar until the mixture lightens in
                    color.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Add the cocoa, oil, and milk to the mixture and stir.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Set aside 2-2.5 cups of this mixture (the amount you pour
                    over the cake will depend on how wet you want it).
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Mix in the baking powder and flour.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Bake in a preheated oven at 170°C (340°F) for about 45
                    minutes. The cake is ready when a toothpick comes out clean.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    As soon as the cake comes out of the oven, poke small holes
                    in it and pour the reserved mixture over the cake.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Wait for about 1 hour for the cake to soak up the syrup.
                  </ListGroup.Item>
                  <ListGroup.Item>The cake is ready, enjoy!</ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default WetCake;
