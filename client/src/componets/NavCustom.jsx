import "../assets/sass/NavCustom.scss";
import { Col, Container, Nav, Navbar } from "react-bootstrap";

const NavCustom = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Col xs={2} className="column1">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          </Col>
          <Col xs={8}>
            <Nav className="column2 d-flex justify-content-center align-items-center">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Col>

          <Col xs={2}>
            <Nav className="column3">
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Col>
        </Container>
      </Navbar>
    </>
  );
};

export default NavCustom;
