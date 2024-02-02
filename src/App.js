import "./App.css";
import NavbarComponent from "./component/NavbarComponent";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FooterComponent from "./component/FooterComponent";
import FilmlistComponent from "./component/FilmlistComponent";

function App() {
  return (
    <>
      <header>
        <NavbarComponent />
      </header>
      <main className=" container-fluid text-bg-dark">
        <FilmlistComponent />
      </main>
      <footer className=" container-fluid text-bg-dark pt-5">
        <FooterComponent />
      </footer>
    </>
  );
}

export default App;
