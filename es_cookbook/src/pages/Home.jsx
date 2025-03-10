import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";
import "../styles/home.css";
import "../styles/recipeCard.css";
import BrownieImg from "../assets/brownieImg.jpg";
import { recipes } from "../components/recipes";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/recipe/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="home-banner">
        <div className="banner-left">
          <h2>Welcome to ES Cookbook</h2>
          <p>
            A collection of my favorite recipes—some I’ve created, some I’ve
            learned from amazing cooks I admire. Every dish here is something
            I’ve tested, loved, and made over and over again.
          </p>
        </div>
        <div className="banner-right">
          <h3>Real Recipes, Real Stories</h3>
          <p>
            This isn’t just a cookbook; it’s a journey through flavors and
            memories. You’ll find recipes I’ve tweaked to perfection, ones I’ve
            borrowed from my favorite chefs, and dishes inspired by the people I
            follow. Each recipe is made with real ingredients for real, everyday
            moments—because great food should be simple and satisfying.
          </p>
        </div>
      </div>

      <div className="highlighted-recipe">
        <Container>
          <Row>
            <h2 className="highlighted-header">This Week's Recipe</h2>
          </Row>
          <Row>
            <Col sm={4} className="img-col">
              <Image src={BrownieImg} fluid />
            </Col>
            <Col sm={8} className="highlighted-text">
              <div>
                <span className="date">March 8, 2025</span>
                <h3>Best Ever Brownies</h3>
              </div>
              <p>
                You know those times when you’re supposed to bring treats
                somewhere but you seriously don’t have the time? MAKE THESE.
                They are the answer to treats at your next office treat day,
                birthday party, Bible study, basketball thingy, or Friday night
                lounge party on the couch.
              </p>
              <a href="/recipe/brownie">Go to the recipe</a>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="recipes">
        <Container className="my-5">
          <Row>
            <h2 className="recipes-header">Recipes</h2>
          </Row>
          <Row className="g-4 pb-5 justify-content-center">
            {recipes.map((recipe) => (
              <Col
                key={recipe.id}
                lg={4}
                md={6}
                sm={12}
                className="recipe-card-box"
              >
                <Card style={{ width: "18rem" }} className="recipe-card">
                  <Card.Img
                    className="card-image"
                    variant="top"
                    src={
                      new URL(`../assets/${recipe.image}.jpg`, import.meta.url)
                        .href
                    }
                    alt={recipe.title}
                  />
                  <Card.Body>
                    <Card.Title>{recipe.title}</Card.Title>
                    <Card.Text>{recipe.description}</Card.Text>
                    <Button
                      variant="primary"
                      className="custom-btn"
                      onClick={() => handleNavigate(recipe.id)}
                    >
                      See the Recipe
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Home;
