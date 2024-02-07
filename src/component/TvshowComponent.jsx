import React from "react";
import SinglelistComponent from "./SinglefilmComponent";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function TvshowComponent() {
  return (
    <>
      <article className="container-fluid d-flex justify-content-between align-items-center">
        <div className="d-flex justify-content-center align-items-center">
          <div>
            <h1 className="text-bg-dark me-5">TV Shows</h1>
          </div>
          <div>
            <select
              className="form-select text-bg-dark"
              aria-label="Default select example"
            >
              <option selected>Genere</option>
              <option>Action</option>
              <option>Commedy</option>
              <option>Three</option>
              <option>Horror</option>
            </select>
          </div>
        </div>
        <div>
          <i className="bi bi-grid icons me-3"></i>
          <i className="bi bi-grid-3x3 icons"></i>
        </div>
      </article>
      <Container fluid>
        <Row className="justify-content-center">
          <h3 className="mt-5 mb-5">Twilight</h3>
          <SinglelistComponent film="twilight" className="mt-5" />
          <h3 className="mt-5 mb-5">Marvel</h3>
          <SinglelistComponent film="marvel" className="mt-5" />
          {/* ho voluto mettere "The hunger games, nonostante manchi l'ultima immagine di copertina, perchè è la mia seconda saga preferita :') */}
          <h3 className="mt-5 mb-5">Giovanni Falcone</h3>
          <SinglelistComponent film="giovanni falcone" className="mt-5" />
        </Row>
      </Container>
    </>
  );
}
export default TvshowComponent;
