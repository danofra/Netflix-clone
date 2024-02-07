import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import SpinnerComponent from "./SpinnerComponent";
import { Link } from "react-router-dom";

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
  };

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    return this.state.isLoaded ? (
      <div className="d-flex justify-content-center">
        <SpinnerComponent />
      </div>
    ) : (
      this.state.movies.splice(0, 6).map((film) => {
        return (
          <Col
            xs={12}
            sm={4}
            md={3}
            lg={2}
            xl={2}
            className="p-3"
            key={film.imdbID}
          >
            <Link to={"/MoviedetailsComponent"} >
              <Image
                src={film.Poster}
                width="100%"
                height="100%"
                className="scale"
              />
            </Link>
          </Col>
        );
      })
    );
  }
}

export default SinglefilmComponent;
