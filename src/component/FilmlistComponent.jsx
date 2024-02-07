import React from "react";
import SinglelistComponent from "./SinglefilmComponent";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function FilmlistComponent() {
  return (
    <>
      <Container fluid>
        <Row className="justify-content-center">
          <h3 className="mt-5 mb-5">Harry Potter</h3>
          <SinglelistComponent film="harry potter" className="mt-5" />
          <h3 className="mt-5 mb-5">The Hunger Games</h3>
          <SinglelistComponent film="hunger games" className="mt-5" />
          {/* ho voluto mettere "The hunger games, nonostante manchi l'ultima immagine di copertina, perchè è la mia seconda saga preferita :') */}
          <h3 className="mt-5 mb-5">Fantozzi</h3>
          <SinglelistComponent film="fantozzi" className="mt-5" />
        </Row>
      </Container>
    </>
  );
}
export default FilmlistComponent;
