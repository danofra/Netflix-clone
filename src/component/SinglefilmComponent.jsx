import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import SpinnerComponent from "./SpinnerComponent";
import Alert from "react-bootstrap/Alert";
import { toBeRequired } from "@testing-library/jest-dom/matchers";

class SinglefilmComponent extends Component {
  state = {
    movies: [],
    isLoaded: false,
    error: false,
  };

  fetchMovies = () => {
    this.setState({ ...this.state, isLoaded: true });
    fetch("http://www.omdbapi.com/?apikey=2f163bb0&s=" + this.props.film)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Non funziona");
        }
      })
      .then((data) => {
        console.log(data);
        this.setState({ movies: data.Search, isLoaded: false });
      })
      .catch((error) => console.error("Error fetching movies:", error));
    this.setState({ isLoaded: false, error: true });
  };

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    return this.state.isLoaded ? (
      <div>
        <SpinnerComponent />
      </div>
    ) : (
      <>
        {this.state.error && (
          <Col>
            <Alert variant="danger">Si è verificato un problema</Alert>
          </Col>
        )}
        {this.state.movies.slice(0, 6).map((film) => (
          <Col key={film.imdbID} sm={2} md={4} lg={3}>
            {film.Poster && (
              <Image
                src={film.Poster}
                width="100%"
                height="100%"
                className="scale"
              />
            )}
          </Col>
        ))}
      </>
    );
  }
}

export default SinglefilmComponent;
