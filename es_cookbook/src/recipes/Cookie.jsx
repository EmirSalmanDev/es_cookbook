import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import "../styles/recipe.css";
import { useEffect } from "react";

function Cookie() {
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
              COOKIE RECIPE
            </Card.Title>

            <Row className="mt-4">
              <Col>
                <h3 className="section-title">Ingredients</h3>
                <ListGroup variant="flush">
                  <ListGroup.Item>60g granulated sugar</ListGroup.Item>
                  <ListGroup.Item>110g brown sugar</ListGroup.Item>
                  <ListGroup.Item>125g butter</ListGroup.Item>
                  <ListGroup.Item>1 large egg</ListGroup.Item>
                  <ListGroup.Item>200g flour</ListGroup.Item>
                  <ListGroup.Item>1 level tablespoon cornstarch</ListGroup.Item>
                  <ListGroup.Item>1/2 teaspoon salt</ListGroup.Item>
                  <ListGroup.Item>
                    1/2 level teaspoon baking soda (be careful not to overuse)
                  </ListGroup.Item>
                  <ListGroup.Item>1 packet baking powder</ListGroup.Item>
                  <ListGroup.Item>1 packet vanilla sugar</ListGroup.Item>
                  <ListGroup.Item>150-180g chopped chocolate</ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>

            <Row className="mt-4">
              <Col>
                <h3 className="section-title">How to Make</h3>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    Melt the butter and let it cool to room temperature, then
                    whisk it with the sugar.
                  </ListGroup.Item>
                  <ListGroup.Item>Add the egg and whisk again.</ListGroup.Item>
                  <ListGroup.Item>
                    Add the dry ingredients and mix with a spatula. Let the
                    dough rest in the fridge for at least 40 minutes (ideally
                    18-24 hours).
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Shape the dough into balls as desired. The recipe is
                    designed for portions approximately three fingers in length
                    and two fingers in width.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Bake in a preheated oven at 200°C (without fan) for 10-12
                    minutes.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Don't forget to let them cool before touching, or they will
                    crumble in your hands.
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

export default Cookie;
