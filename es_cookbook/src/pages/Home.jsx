import { Container, Row, Col, Image } from "react-bootstrap";
import "../styles/home.css";
import Brownie from "../assets/brownie.jpg";
import { recipes } from "../components/recipes";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

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
              <Image src={Brownie} fluid />
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
              <a href="#">Go to the recipe</a>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="recipes">
        <Container>
          <Row>
            <h2>Recipes</h2>
          </Row>
          <Row>
            {recipes.map((recipe) => (
              <div key={recipe.id} className="recipe-card">
                <h2>{recipe.title}</h2>
                <p>{recipe.description}</p>
                <button onClick={() => navigate(`/recipe/${recipe.id}`)}>
                  See the Recipe
                </button>
              </div>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Home;
