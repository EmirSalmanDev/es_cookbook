import "../styles/recipe.css";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

function CarrotCake() {
  return (
    <>
      <Container className="my-5">
        <Card className="shadow-lg p-4 recipe-card">
          <Card.Body>
            <Card.Title className="text-center recipe-title">
              CARROT CAKE RECIPE
            </Card.Title>

            <Row className="mt-4">
              <Col>
                <h3 className="section-title">Ingredients</h3>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    300g carrots (3-4 medium-sized)
                  </ListGroup.Item>
                  <ListGroup.Item>240g (2 cups) flour</ListGroup.Item>
                  <ListGroup.Item>1 pinch of salt</ListGroup.Item>
                  <ListGroup.Item>1 packet baking powder</ListGroup.Item>
                  <ListGroup.Item>1 packet vanilla sugar</ListGroup.Item>
                  <ListGroup.Item>
                    1 teaspoon ground cinnamon (heaping)
                  </ListGroup.Item>
                  <ListGroup.Item>1/4 teaspoon grated nutmeg</ListGroup.Item>
                  <ListGroup.Item>1/4 teaspoon ground ginger</ListGroup.Item>
                  <ListGroup.Item>150g (1 cup) brown sugar</ListGroup.Item>
                  <ListGroup.Item>
                    80g (4 tablespoons) white sugar
                  </ListGroup.Item>
                  <ListGroup.Item>4 medium-sized eggs</ListGroup.Item>
                  <ListGroup.Item>100g (1/2 cup) melted butter</ListGroup.Item>
                  <ListGroup.Item>140ml (3/4 cup) vegetable oil</ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>

            <Row className="mt-4">
              <Col>
                <h3 className="section-title">How to Make</h3>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    Whisk the sugar and eggs until the mixture lightens in
                    color.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Add the melted butter and vegetable oil to the mixture and
                    mix well.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Add the dry ingredients and mix thoroughly.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Add the grated carrots and chopped walnuts, and mix.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Bake in a preheated oven at 180°C (without fan) for about 45
                    minutes, until a toothpick comes out clean.
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>

            <Row className="mt-4">
              <Col>
                <h3 className="section-title">Optional Filling Cream</h3>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    130g (approximately 3/4 cup) powdered sugar
                  </ListGroup.Item>
                  <ListGroup.Item>
                    200ml (1 cup) heavy cream (35% fat)
                  </ListGroup.Item>
                  <ListGroup.Item>
                    150g cream cheese (suitable for desserts, white variety)
                  </ListGroup.Item>
                  <ListGroup.Item>Pinch of salt</ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>

            <Row className="mt-4">
              <Col>
                <h3 className="section-title">How to Make the Cream</h3>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    Whisk all ingredients together until smooth.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Once the cake has cooled, spread the cream over it.
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

export default CarrotCake;
