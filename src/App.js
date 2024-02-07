import "./App.css";
import NavbarComponent from "./component/NavbarComponent";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FooterComponent from "./component/FooterComponent";
import FilmlistComponent from "./component/FilmlistComponent";
import TvshowComponent from "./component/TvshowComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviedetailsComponent from "./component/MoviedetailsComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <NavbarComponent />
        </header>

        <main className=" container-fluid text-bg-dark">
          <Routes>
            <Route path="/" element={<FilmlistComponent />} />
            <Route path="/TvshowComponent" element={<TvshowComponent />} />
            <Route
              path="/MoviedetailsComponent/:movieid"
              element={<MoviedetailsComponent />}
            />
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </main>

        <footer className=" container-fluid text-bg-dark pt-5">
          <FooterComponent />
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
