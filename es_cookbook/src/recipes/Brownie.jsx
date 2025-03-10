import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import "../styles/recipe.css";

function Brownie() {
  return (
    <>
      <Container className="my-5">
        <Card className="shadow-lg p-4 recipe-card">
          <Card.Body>
            <Card.Title className="text-center recipe-title">
              BROWNIE RECIPE
            </Card.Title>

            <Row className="mt-4">
              <Col>
                <h3 className="section-title">Ingredients</h3>
                <ListGroup variant="flush">
                  <ListGroup.Item>230 grams butter</ListGroup.Item>
                  <ListGroup.Item>230 grams dark chocolate</ListGroup.Item>
                  <ListGroup.Item>1 packet vanilla sugar</ListGroup.Item>
                  <ListGroup.Item>
                    1 heaping teaspoon instant coffee
                  </ListGroup.Item>
                  <ListGroup.Item>
                    75 grams cocoa powder (3/4 cup)
                  </ListGroup.Item>
                  <ListGroup.Item>
                    200 grams granulated sugar (1 cup)
                  </ListGroup.Item>
                  <ListGroup.Item>
                    150 grams brown sugar (3/4 cup)
                  </ListGroup.Item>
                  <ListGroup.Item>5 large eggs</ListGroup.Item>
                  <ListGroup.Item>
                    130 grams flour (1 cup + 1 heaping tablespoon)
                  </ListGroup.Item>
                  <ListGroup.Item>1.5 teaspoons salt</ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>

            <Row className="mt-4">
              <Col>
                <h3 className="section-title">How to Make</h3>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    Melt the butter and mix it with chocolate and coffee.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Whisk the sugars and eggs together for a long time until
                    fluffy.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Add the chocolate mixture and whisk again.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Add the dry ingredients and fold gently with a spatula.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Pour the mixture into a 24x24 cm baking pan.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Bake at 180°C (preheated oven) for 30 minutes.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    For the best taste, let it rest in the fridge for one day
                    after baking.
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

export default Brownie;
