import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function NavbarComponent() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="#home">
            <Image
              src="../assets/img/netflix_logo.png"
              width="120"
              className="d-inline-block align-top"
              alt=""
              loading="lazy"
            />
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav" className="mobile-collapse">
            <Nav className="me-auto">
              <Nav.Link href="#home" active>
                Home
              </Nav.Link>
              <Nav.Link href="#link">Serie TV</Nav.Link>
              <Nav.Link href="#film">Film</Nav.Link>
              <Nav.Link href="#nuovi-e-popolari">Nuovi e popolari</Nav.Link>
              <Nav.Link href="#la-mia-lista">La mia lista</Nav.Link>
              <Nav.Link href="#sfoglia-la-lingua">Sfoglia per lingua</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex flex-row justify-content-end">
              <Nav.Link href="#search" className="me-2">
                <i className="bi bi-search"></i>
              </Nav.Link>
              <Nav.Link href="#kids">KIDS</Nav.Link>
              <Nav.Link href="#notification" className="me-2">
                <div className="ms-3 position-relative">
                  <i className="bi bi-bell"></i>
                  <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger rounded-circle"></span>
                </div>
              </Nav.Link>
              <NavDropdown
                title={
                  <Image src="./assets/img/avatar.png" width="30" height="30" />
                }
                id="basic-nav-dropdown"
                align={{ lg: "end", md: "end", sm: "end", xs: "end" }}
              >
                <NavDropdown.Item href="#gestioni-profili">
                  Gestione Profili
                </NavDropdown.Item>
                <NavDropdown.Item href="#account">Account</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
