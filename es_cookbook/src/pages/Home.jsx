import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "../styles/home.css";
import Brownie from "../assets/brownie.jpg";

function Home() {
  return (
    <>
      <div className="home-banner">
        <div className="banner-left">
          <h2>Header</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
            assumenda, doloremque expedita, inventore adipisci vero, ipsum
            similique dignissimos ad nisi architecto neque dolores voluptas
            incidunt cum reprehenderit? Doloribus, nostrum molestiae.
          </p>
        </div>
        <div className="banner-right">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            laudantium, eligendi quod impedit, deserunt sunt velit saepe
            corrupti asperiores fugit atque porro perspiciatis. Nihil sed dicta
            consequuntur? Ut, laboriosam nesciunt? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Temporibus maxime tempora magnam,
            blanditiis est possimus iusto cumque. Aspernatur, maxime debitis
            doloribus aut soluta ipsum obcaecati ex magnam, iusto, dolores amet.
          </p>
        </div>
      </div>

      <div className="highlighted_recipe">
        <Container>
          <Row>
            <h2 className="highlighted_header">This Week's Recipe</h2>
          </Row>
          <Row>
            <Col sm={3}>
              <Image src={Brownie} fluid />
            </Col>
            <Col sm={9} className="highlighted_text">
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
    </>
  );
}

export default Home;
