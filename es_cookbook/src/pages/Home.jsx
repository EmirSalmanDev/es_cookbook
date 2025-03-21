import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";
import "../styles/home.css";
import "../styles/recipeCard.css";
import BrownieImg from "../assets/brownieImg.jpg";
import { recipes } from "../components/recipes";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Home() {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/recipe/${id}`);
  };

  const [selectedCategory, setSelectedCategory] = useState("all");
  const filteredRecipes =
    selectedCategory === "all"
      ? recipes
      : recipes.filter((recipe) => recipe.category.includes(selectedCategory));

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
            <Col md={4} sm={5} className="img-col">
              <Image src={BrownieImg} fluid />
            </Col>
            <Col md={8} sm={7} className="highlighted-text">
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
              <Button
                variant="primary"
                className="custom-btn"
                onClick={() => handleNavigate("brownie")}
              >
                See the Recipe
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="recipes">
        <Container className="my-5">
          <Row>
            <h2 className="recipes-header">Recipes</h2>
          </Row>
          <Row className="filtering-buttons mb-4 ">
            <Button
              className={`mx-2 ${
                selectedCategory === "all" ? "custom-btn" : "selected-btn"
              }`}
              onClick={() => setSelectedCategory("all")}
            >
              All
            </Button>

            <Button
              className={`mx-2 ${
                selectedCategory === "cake" ? "custom-btn" : "selected-btn"
              }`}
              onClick={() => setSelectedCategory("cake")}
            >
              Cake
            </Button>

            <Button
              className={`mx-2 ${
                selectedCategory === "snack" ? "custom-btn" : "selected-btn"
              }`}
              onClick={() => setSelectedCategory("snack")}
            >
              Snack
            </Button>

            <Button
              className={`mx-2 ${
                selectedCategory === "pastry" ? "custom-btn" : "selected-btn"
              }`}
              onClick={() => setSelectedCategory("pastry")}
            >
              Pastry
            </Button>
          </Row>
          <Row className="g-4 pb-5 justify-content-center">
            {filteredRecipes.map((recipe) => (
              <Col
                key={recipe.id}
                xl={3}
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
