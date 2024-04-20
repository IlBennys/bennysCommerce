import "../assets/sass/Articoli.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getArticoli,
  getArticoliByPage,
  getArticoliByPrezzo,
  svuotaArticoli,
} from "../redux/actions/articoliActions";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Row,
  Modal,
  Form,
} from "react-bootstrap";
import cart from "../assets/img/shopping-cart.png";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { postCarrello } from "../redux/actions/carrelloActions";
import Slider from "react-slider";

const Articoli = () => {
  const articolo = useSelector((state) => state.articolo.articoli);
  const pageArticoli = useSelector((state) => state.articolo.paginaArticoli);
  const rangePrezzoArticoli = useSelector(
    (state) => state.articolo.rangePrezzoArticoli
  );
  const idCarrello = useSelector((state) => state.carrello.idCarrello);
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  const [isOnline, setIsOnline] = useState(false);
  const [show, setShow] = useState(false);
  const [filtroRicerca, setFiltroRicerca] = useState(undefined);
  const [filtroPrezzoRicerca, setFiltroPrezzoRicerca] = useState(undefined);
  const [filtroRicercaPrezzo, setFiltroRicercaPrezzo] = useState(undefined);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const svuotaInput = () => {
    document.getElementById("mioInput").value = "";
  };

  const prezzi = articolo.map((articolo) => articolo.prezzo);
  const min = 0;
  const max = Math.max(...prezzi).toFixed();
  const [values, setValues] = useState([min, max]);

  const cerca = (ev) => {
    if (ev !== "") {
      setFiltroRicerca(
        articolo.filter(
          (art) =>
            art.nomeArticolo.toLowerCase().startsWith(ev.toLowerCase()) ||
            art.brand.toLowerCase().startsWith(ev.toLowerCase()) ||
            art.descrizioneArticolo.toLowerCase().includes(ev.toLowerCase())
        )
      );
      setFiltroPrezzoRicerca(
        rangePrezzoArticoli.filter(
          (art) =>
            art.nomeArticolo.toLowerCase().startsWith(ev.toLowerCase()) ||
            art.brand.toLowerCase().startsWith(ev.toLowerCase()) ||
            art.descrizioneArticolo.toLowerCase().includes(ev.toLowerCase())
        )
      );
      if (filtroRicerca !== undefined) {
        const arrayPrezzo = rangePrezzoArticoli.map((e) => e.prezzo);
        console.log(rangePrezzoArticoli, "arrayPrezzo");
        setFiltroRicercaPrezzo(
          filtroRicerca.filter((art) => arrayPrezzo.includes(art.prezzo))
        );
        console.log(
          "oooooooooooo",
          filtroRicerca.filter((art) => arrayPrezzo.includes(art.prezzo))
        );
      }
    } else {
      setFiltroRicerca(undefined);
      setFiltroPrezzoRicerca(undefined);
      setFiltroRicercaPrezzo(undefined);
    }
  };
  console.log(filtroRicercaPrezzo);

  useEffect(() => {
    dispatch(getArticoli()).then(() => setIsOnline(true));
    dispatch(getArticoliByPrezzo(min, max));
  }, []);

  return (
    <>
      {articolo ? (
        <Container>
          <Row>
            <Col md={3}>
              <div className="div-col3">
                <div className="box">
                  <h3>
                    Prezzo <span>Range</span>
                  </h3>
                  <div className="values">
                    {values[0]} € - {values[1]} €
                  </div>
                  <Slider
                    className="slider mt-5"
                    value={values}
                    min={min}
                    max={max}
                    onChange={(e) => {
                      setValues(e || min, e || max);
                      dispatch(getArticoliByPrezzo(values[0], values[1]));
                    }}
                  />
                </div>
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
                          <Card.Img
                            variant="top"
                            className="img-card rounded-3 "
                            src={e.img}
                          />
                          <div className="invi rounded-3 text-white">
                            <p> {e.descrizioneArticolo}</p>
                          </div>
                          <h6 className="badge-h6">
                            <Badge>Promo</Badge>
                          </h6>
                          {token !== "" ? (
                            <div
                              title="Aggiungi al carrello"
                              onClick={() =>
                                dispatch(
                                  postCarrello(idCarrello, e.id, token),
                                  handleShow()
                                )
                              }
                              className="carrello-btn rounded-2"
                            >
                              <img src={cart} alt="" />
                            </div>
                          ) : (
                            <div></div>
                          )}
                          <Card.Body className="body-card-main">
                            <Card.Title className="titolo-card text-start">
                              {e.nomeArticolo}
                            </Card.Title>
                            <Card.Text className="text-brand text-start">
                              Brand: {e.brand}
                            </Card.Text>
                            <Card.Text>{e.prezzo}€</Card.Text>
                          </Card.Body>
                        </Card>
                      </>
                    );
                  })
                ) : (
                  <>
                    <div className="control ms-4 mb-4 ">
                      <Form.Control
                        onChange={(e) => cerca(e.target.value)}
                        type="text"
                        id="mioInput"
                        onKeyUpCapture={(e) => {
                          if (e.key === "Enter") {
                            svuotaInput();
                          }
                        }}
                        placeholder="Cerca il tuo Prodotto           🔎"
                        className="barraRicerca "
                      />
                    </div>
                    {filtroRicerca !== undefined &&
                    values[0] === min &&
                    values[1] === max
                      ? filtroRicerca.map((e) => {
                          return (
                            <>
                              <Card key={e.id} className="m-1 card-main">
                                <Card.Img
                                  variant="top"
                                  className="img-card rounded-3 h-50"
                                  src={e.img}
                                />
                                <div className="invi rounded-3 text-white">
                                  <p> {e.descrizioneArticolo}</p>
                                </div>
                                <h6 className="badge-h6">
                                  <Badge>Promo</Badge>
                                </h6>
                                {token !== "" ? (
                                  <div
                                    title="Aggiungi al carrello"
                                    onClick={() =>
                                      dispatch(
                                        postCarrello(idCarrello, e.id, token),
                                        handleShow()
                                      )
                                    }
                                    className="carrello-btn rounded-2"
                                  >
                                    <img src={cart} alt="" />
                                  </div>
                                ) : (
                                  <div></div>
                                )}
                                <Card.Body className="body-card-main">
                                  <Card.Title className="titolo-card text-start">
                                    {e.nomeArticolo}
                                  </Card.Title>
                                  <Card.Text className="text-brand text-start">
                                    Brand: {e.brand}
                                  </Card.Text>
                                  <Card.Text>{e.prezzo}€</Card.Text>
                                </Card.Body>
                              </Card>
                            </>
                          );
                        })
                      : filtroPrezzoRicerca === undefined &&
                        (values[0] === min || values[0] !== min) &&
                        (values[1] === max || values[1] !== max)
                      ? rangePrezzoArticoli.map((e) => {
                          return (
                            <>
                              <Card key={e.id} className="m-1 card-main">
                                <Card.Img
                                  variant="top"
                                  className="img-card rounded-3 h-50"
                                  src={e.img}
                                />
                                <div className="invi rounded-3 text-white">
                                  <p> {e.descrizioneArticolo}</p>
                                </div>
                                <h6 className="badge-h6">
                                  <Badge>Promo</Badge>
                                </h6>
                                {token !== "" ? (
                                  <div
                                    title="Aggiungi al carrello"
                                    onClick={() =>
                                      dispatch(
                                        postCarrello(idCarrello, e.id, token),
                                        handleShow()
                                      )
                                    }
                                    className="carrello-btn rounded-2"
                                  >
                                    <img src={cart} alt="" />
                                  </div>
                                ) : (
                                  <div></div>
                                )}
                                <Card.Body className="body-card-main">
                                  <Card.Title className="titolo-card text-start">
                                    {e.nomeArticolo}
                                  </Card.Title>
                                  <Card.Text className="text-brand text-start">
                                    Brand: {e.brand}
                                  </Card.Text>
                                  <Card.Text>{e.prezzo}€</Card.Text>
                                </Card.Body>
                              </Card>
                            </>
                          );
                        })
                      : filtroPrezzoRicerca !== undefined
                      ? filtroPrezzoRicerca.map((e) => {
                          return (
                            <>
                              <Card key={e.id} className="m-1 card-main">
                                <Card.Img
                                  variant="top"
                                  className="img-card rounded-3 h-50"
                                  src={e.img}
                                />
                                <div className="invi rounded-3 text-white">
                                  <p> {e.descrizioneArticolo}</p>
                                </div>

                                <h6 className="badge-h6">
                                  <Badge>Promo</Badge>
                                </h6>
                                {token !== "" ? (
                                  <div
                                    title="Aggiungi al carrello"
                                    onClick={() =>
                                      dispatch(
                                        postCarrello(idCarrello, e.id, token),
                                        handleShow()
                                      )
                                    }
                                    className="carrello-btn rounded-2"
                                  >
                                    <img src={cart} alt="" />
                                  </div>
                                ) : (
                                  <div></div>
                                )}
                                <Card.Body className="body-card-main">
                                  <Card.Title className="titolo-card text-start">
                                    {e.nomeArticolo}
                                  </Card.Title>
                                  <Card.Text className="text-brand text-start">
                                    Brand: {e.brand}
                                  </Card.Text>
                                  <Card.Text>{e.prezzo}€</Card.Text>
                                </Card.Body>
                              </Card>
                            </>
                          );
                        })
                      : filtroRicercaPrezzo.map((e) => {
                          return (
                            <>
                              <Card key={e.id} className="m-1 card-main">
                                <Card.Img
                                  variant="top"
                                  className="img-card rounded-3 h-50"
                                  src={e.img}
                                />
                                <div className="invi rounded-3 text-white">
                                  <p> {e.descrizioneArticolo}</p>
                                </div>

                                <h6 className="badge-h6">
                                  <Badge>Promo</Badge>
                                </h6>
                                {token !== "" ? (
                                  <div
                                    title="Aggiungi al carrello"
                                    onClick={() =>
                                      dispatch(
                                        postCarrello(idCarrello, e.id, token),
                                        handleShow()
                                      )
                                    }
                                    className="carrello-btn rounded-2"
                                  >
                                    <img src={cart} alt="" />
                                  </div>
                                ) : (
                                  <div></div>
                                )}
                                <Card.Body className="body-card-main">
                                  <Card.Title className="titolo-card text-start">
                                    {e.nomeArticolo}
                                  </Card.Title>
                                  <Card.Text className="text-brand text-start">
                                    Brand: {e.brand}
                                  </Card.Text>
                                  <Card.Text>{e.prezzo}€</Card.Text>
                                </Card.Body>
                              </Card>
                            </>
                          );
                        })}
                  </>
                )}
              </Row>
            </Col>
          </Row>
        </Container>
      ) : null}
      <Modal show={show} onHide={handleClose} className="modal-container">
        <Modal.Header className="head-mod">
          articolo aggiunto al carrello
          <span className="ms-1">
            <IoCheckmarkDoneSharp />
          </span>
        </Modal.Header>
      </Modal>
    </>
  );
};

export default Articoli;
