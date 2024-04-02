import "../assets/sass/NavCustom.scss";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavCustom = () => {
  //aggiungere getUser
  return (
    <>
      <Navbar className="nav-main">
        <Container className="d-flex justify-content-between align-items-center">
          <Nav className="column1">
            <Nav.Link href="/">
              <div className="div-img"></div>
            </Nav.Link>
          </Nav>
          <Nav className="column2 d-flex justify-content-center align-items-center">
            <Nav.Link className="text-nav" href="/about">
              About
            </Nav.Link>
            <Nav.Link className="text-nav" href="/articoli">
              Articoli
            </Nav.Link>
            <Nav.Link className="text-nav" href="/carrello">
              Carrello
            </Nav.Link>
            <Nav.Link className=" profilo-btn" href="/login">
              Login
            </Nav.Link>
            <Nav.Link className=" profilo-btn" href="/register">
              Register
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavCustom;
