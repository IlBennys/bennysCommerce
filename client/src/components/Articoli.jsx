import "../assets/sass/Articoli.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticoli, getArticoliByPage, svuotaArticoli } from "../redux/actions/articoliActions";
import { Badge, Button, Card, Col, Container, Row, Modal } from "react-bootstrap";
import cart from "../assets/img/shopping-cart.png";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { postCarrello } from "../redux/actions/carrelloActions";

const Articoli = () => {
  const articolo = useSelector((state) => state.articolo.articoli);
  const pageArticoli = useSelector((state) => state.articolo.paginaArticoli);
  const idCarrello = useSelector((state) => state.carrello.idCarrello);
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  const [isOnline, setIsOnline] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    dispatch(getArticoli()).then(() => setIsOnline(true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {articolo ? (
        <Container>
          <Row>
            <Col md={3}>
              <div className="div-col3 ">
                <h2 className="text-white">Accessori PC</h2>
                <div className="div-btn mb-2">
                  <Button
                    onClick={() => {
                      dispatch(svuotaArticoli());
                      dispatch(getArticoliByPage(0, 9));
                    }}
                    className="text-white"
                  >
                    Mouse
                  </Button>
                  <Button
                    onClick={() => {
                      dispatch(svuotaArticoli());
                      dispatch(getArticoliByPage(2, 9));
                    }}
                    className="text-white"
                  >
                    Keyboard
                  </Button>
                  <Button
                    onClick={() => {
                      dispatch(svuotaArticoli());
                      dispatch(getArticoliByPage(1, 9));
                    }}
                    className="text-white"
                  >
                    Monitor
                  </Button>
                  <Button
                    onClick={() => {
                      dispatch(svuotaArticoli());
                      dispatch(getArticoli());
                    }}
                    className="text-white"
                  >
                    Tutti gli Articoli
                  </Button>
                </div>
              </div>
            </Col>
            <Col md={9}>
              <Row className="card-row mt-2 justify-content-evenly ">
                {!isOnline ? (
                  <div className="mt-5 div-spinner d-flex align-items-center flex-wrap">
                    <h1>Caricamento...</h1>
                    <p className="loader"></p>
                  </div>
                ) : pageArticoli.content ? (
                  pageArticoli.content.map((e) => {
                    return (
                      <>
                        <Card key={e.id} className="m-1 card-main">
                          <Card.Img variant="top" className="img-card rounded-3 " src={e.img} />
                          <div className="invi rounded-3 text-white">
                            <p> {e.descrizioneArticolo}</p>
                          </div>

                          <h6 className="badge-h6">
                            <Badge>Promo</Badge>
                          </h6>
                          {token !== "" ? (
                            <div
                              title="Aggiungi al carrello"
                              onClick={() => dispatch(postCarrello(idCarrello, e.id, token), handleShow())}
                              className="carrello-btn rounded-2"
                            >
                              <img src={cart} alt="" />
                            </div>
                          ) : (
                            <div></div>
                          )}
                          <Card.Body className="body-card-main">
                            <Card.Title className="titolo-card text-start">{e.nomeArticolo}</Card.Title>
                            <Card.Text className="text-brand text-start">Brand: {e.brand}</Card.Text>
                            <Card.Text>{e.prezzo}€</Card.Text>
                          </Card.Body>
                        </Card>
                      </>
                    );
                  })
                ) : (
                  articolo.map((e) => {
                    return (
                      <>
                        <Card key={e.id} className="m-1 card-main">
                          <Card.Img variant="top" className="img-card rounded-3 h-50" src={e.img} />
                          <div className="invi rounded-3 text-white">
                            <p> {e.descrizioneArticolo}</p>
                          </div>

                          <h6 className="badge-h6">
                            <Badge>Promo</Badge>
                          </h6>
                          {token !== "" ? (
                            <div
                              title="Aggiungi al carrello"
                              onClick={() => dispatch(postCarrello(idCarrello, e.id, token), handleShow())}
                              className="carrello-btn rounded-2"
                            >
                              <img src={cart} alt="" />
                            </div>
                          ) : (
                            <div></div>
                          )}
                          <Card.Body className="body-card-main">
                            <Card.Title className="titolo-card text-start">{e.nomeArticolo}</Card.Title>
                            <Card.Text className="text-brand text-start">Brand: {e.brand}</Card.Text>
                            <Card.Text>{e.prezzo}€</Card.Text>
                          </Card.Body>
                        </Card>
                      </>
                    );
                  })
                )}
              </Row>
            </Col>
          </Row>
        </Container>
      ) : null}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="head-mod ">
          articolo aggiunto al carrello{" "}
          <span className="ms-1">
            <IoCheckmarkDoneSharp />
          </span>
        </Modal.Header>
      </Modal>
    </>
  );
};

export default Articoli;
