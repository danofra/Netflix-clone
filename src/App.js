import "./App.css";
import NavbarComponent from "./component/NavbarComponent";
import FooterComponent from "./component/FooterComponent";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <header>
        <NavbarComponent />
      </header>
      <main></main>
      <footer>
        <FooterComponent />
      </footer>
    </>
  );
}

export default App;
