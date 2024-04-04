import { useDispatch, useSelector } from "react-redux";
import "../assets/sass/NavCustom.scss";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { useEffect } from "react";
import { logoutUser, trovaIdUser } from "../redux/actions/userActions";
import { svuotaArticoli } from "../redux/actions/articoliActions";

const NavCustom = () => {
  const token = useSelector((state) => state.user.token);
  const username = useSelector((state) => state.user.username);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(trovaIdUser(token, username));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar className="nav-main mb-3">
        <Container className="main-cont d-flex justify-content-between align-items-center">
          <Nav className="column1">
            <Nav.Link href="/">
              <div className="div-img"></div>
            </Nav.Link>
          </Nav>
          <div className="column2 d-flex justify-content-center align-items-center">
            <Nav>
              <Nav.Link className="ms-3 text-nav" href="/about">
                Su noi
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                className="ms-3 text-nav"
                href="/articoli"
                onClick={() => dispatch(svuotaArticoli())}
              >
                Shop
              </Nav.Link>
            </Nav>
            {token !== "" ? (
              <>
                <Nav>
                  <Nav.Link className="ms-3 text-nav" href="/carrello">
                    Carrello
                  </Nav.Link>
                </Nav>
                <NavDropdown
                  className="ms-3 text-nav mainDrop"
                  title={`Ciao ${username}`}
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item className="text-white mb-2" href="/profilo">
                    Il mio profilo
                  </NavDropdown.Item>
                  <NavDropdown.Item className="text-white mb-2" href="/ordini">
                    I miei ordini
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    onClick={() => dispatch(logoutUser())}
                    className="text-white mb-2"
                  >
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <Nav>
                <Nav.Link className="ms-3  profilo-btn" href="/login">
                  Login
                </Nav.Link>
                <Nav.Link className="ms-3  profilo-btn" href="/register">
                  Registrazione
                </Nav.Link>
              </Nav>
            )}
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default NavCustom;
