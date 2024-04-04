import "../assets/sass/Articoli.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getArticoli,
  getArticoliByPage,
  svuotaArticoli,
} from "../redux/actions/articoliActions";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import cart from "../assets/img/shopping-cart.png";
import { postCarrello } from "../redux/actions/carrelloActions";

const Articoli = () => {
  const articolo = useSelector((state) => state.articolo.articoli);
  const pageArticoli = useSelector((state) => state.articolo.paginaArticoli);
  const idCarrello = useSelector((state) => state.carrello.idCarrello);
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  const [isOnline, setIsOnline] = useState(false);

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
              <div className="div-col3">
                <h2 className="text-white">Accessori PC</h2>
                <div className="div-btn">
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
                </div>
              </div>
            </Col>
            <Col md={9}>
              <Row className="my-3">
                <div className="column d-flex justify-content-start align-items-center">
                  <div>
                    <span>Brand</span>
                  </div>
                  <div>
                    <span>Nome</span>
                  </div>
                  <div>
                    <span>Prezzo</span>
                  </div>
                </div>
              </Row>
              <Row className="card-row">
                {!isOnline ? (
                  <h1 className="text-center text-white">caricamento...</h1>
                ) : pageArticoli.content ? (
                  pageArticoli.content[0].id === 1 ? (
                    pageArticoli.content.map((e) => {
                      return (
                        <>
                          <Card key={e.id} className="m-1 card-main">
                            <Card.Img
                              variant="top"
                              className="img-card rounded-3 h-50"
                              src={e.img}
                            />
                            <div
                              onClick={() =>
                                dispatch(postCarrello(idCarrello, e.id, token))
                              }
                              className="carrello-btn rounded-2"
                            >
                              <img src={cart} alt="" />
                            </div>
                            <Card.Body className="body-card-main">
                              <Card.Title className="titolo-card text-center">
                                {e.nomeArticolo}
                              </Card.Title>
                              <Card.Text className="text-center">
                                {e.brand}
                              </Card.Text>
                              <Card.Text>{e.descrizioneArticolo}</Card.Text>
                            </Card.Body>
                          </Card>
                        </>
                      );
                    })
                  ) : pageArticoli.content[0].id === 10 ? (
                    pageArticoli.content.map((e) => {
                      return (
                        <>
                          <Card key={e.id} className="m-1 card-main">
                            <Card.Img
                              className="img-card rounded-3 h-50"
                              variant="top"
                              src={e.img}
                            />
                            <div
                              onClick={() =>
                                dispatch(postCarrello(idCarrello, e.id, token))
                              }
                              className="carrello-btn rounded-2"
                            >
                              <img src={cart} alt="" />
                            </div>
                            <Card.Body className="body-card-main">
                              <Card.Title className="titolo-card text-center">
                                {e.nomeArticolo}
                              </Card.Title>
                              <Card.Text className="text-center">
                                {e.brand}
                              </Card.Text>
                              <Card.Text>{e.descrizioneArticolo}</Card.Text>
                            </Card.Body>
                          </Card>
                        </>
                      );
                    })
                  ) : (
                    pageArticoli.content.map((e) => {
                      return (
                        <>
                          <Card key={e.id} className="m-1 card-main">
                            <Card.Img
                              variant="top"
                              className="img-card rounded-3 h-50"
                              src={e.img}
                            />
                            <div
                              onClick={() =>
                                dispatch(postCarrello(idCarrello, e.id, token))
                              }
                              className="carrello-btn rounded-2"
                            >
                              <img src={cart} alt="" />
                            </div>
                            <Card.Body className="body-card-main">
                              <Card.Title className="titolo-card text-center">
                                {e.nomeArticolo}
                              </Card.Title>
                              <Card.Text className="text-center">
                                {e.brand}
                              </Card.Text>
                              <Card.Text>{e.descrizioneArticolo}</Card.Text>
                            </Card.Body>
                          </Card>
                        </>
                      );
                    })
                  )
                ) : (
                  articolo.map((e) => {
                    return (
                      <>
                        <Card key={e.id} className="m-1 card-main">
                          <Card.Img
                            variant="top"
                            className="img-card rounded-3 h-50"
                            src={e.img}
                          />

                          <div
                            onClick={() =>
                              dispatch(postCarrello(idCarrello, e.id, token))
                            }
                            className="carrello-btn rounded-2"
                          >
                            <img src={cart} alt="" />
                          </div>
                          <Card.Body className="body-card-main">
                            <Card.Title className="titolo-card text-center">
                              {e.nomeArticolo}
                            </Card.Title>
                            <Card.Text className="text-center">
                              {e.brand}
                            </Card.Text>
                            <Card.Text>{e.descrizioneArticolo}</Card.Text>
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
      ) : (
        <h1 className="text-center text-white">caricamento...</h1>
      )}
    </>
  );
};

export default Articoli;
