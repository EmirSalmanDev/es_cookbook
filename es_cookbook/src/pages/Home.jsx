import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/home.css";

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
    </>
  );
}

export default Home;
