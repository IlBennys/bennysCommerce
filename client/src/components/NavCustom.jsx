import { useDispatch, useSelector } from "react-redux";
import "../assets/sass/NavCustom.scss";
import { Badge, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { useEffect } from "react";
import { logoutUser, trovaIdUser } from "../redux/actions/userActions";
import { svuotaArticoli } from "../redux/actions/articoliActions";
import { RiShoppingBasket2Fill } from "react-icons/ri";
import { GoHomeFill } from "react-icons/go";
import { FaRegQuestionCircle, FaUserCircle } from "react-icons/fa";
import { BsBagHeartFill } from "react-icons/bs";
import { TbLogout, TbLogin2 } from "react-icons/tb";
import { FaUserPen } from "react-icons/fa6";
const NavCustom = () => {
  const token = useSelector((state) => state.user.token);
  const username = useSelector((state) => state.user.username);
  const carrello = useSelector((state) => state.carrello.carrello);

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
              <Nav.Link className="ms-3 text-nav" href="/">
                Home
                <span className="ms-1">
                  <GoHomeFill />
                </span>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className="ms-3 text-nav" href="/about">
                Su noi
                <span className="ms-1">
                  <FaRegQuestionCircle />
                </span>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                className="ms-3 text-nav"
                href="/articoli"
                onClick={() => dispatch(svuotaArticoli())}
              >
                Shop
                <span className="ms-1">
                  <RiShoppingBasket2Fill />
                </span>
              </Nav.Link>
            </Nav>
            {token !== "" ? (
              <>
                <Nav>
                  <Nav.Link
                    className="ms-3 text-carrello text-nav"
                    href="/carrello"
                  >
                    Carrello
                    {carrello.articoli !== undefined ? (
                      <Badge>{carrello.articoli.length}</Badge>
                    ) : (
                      0
                    )}
                  </Nav.Link>
                </Nav>
                <NavDropdown
                  className="ms-4 text-nav mainDrop"
                  title={`Ciao ${username}`}
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item className="text-white mb-2" href="/profilo">
                    <div className="d-flex align-items-center justify-content-between">
                      <span> Il mio profilo</span>
                      <span className="ms-1">
                        <FaUserCircle />
                      </span>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="text-white mb-2" href="/ordini">
                    <div className="d-flex align-items-center justify-content-between">
                      <span> I miei ordini</span>
                      <span className="ms-1">
                        <BsBagHeartFill />
                      </span>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    onClick={() => dispatch(logoutUser())}
                    className="text-white mb-2"
                  >
                    <div className="d-flex align-items-center justify-content-between">
                      <span> Logout</span>
                      <span className="ms-1">
                        <TbLogout />
                      </span>
                    </div>
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <Nav>
                <Nav.Link className="ms-3  profilo-btn" href="/login">
                  <div className="d-flex align-items-center ">
                    <span> Login</span>
                    <span className="ms-2">
                      <TbLogin2 />
                    </span>
                  </div>
                </Nav.Link>
                <Nav.Link className="ms-3  profilo-btn" href="/register">
                  <div className="d-flex align-items-center ">
                    <span> Registrazione</span>
                    <span className="ms-2">
                      <FaUserPen />
                    </span>
                  </div>
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
