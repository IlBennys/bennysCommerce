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
  Dropdown,
  Toast,
} from "react-bootstrap";
import cart from "../assets/img/shopping-cart.png";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { postCarrello } from "../redux/actions/carrelloActions";
import Slider from "react-slider";

const Articoli = ({ light }) => {
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
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showA, setShowA] = useState(false);
  const toggleShowA = () => setShowA(!showA);

  const prezzi = articolo.map((articolo) => articolo.prezzo);
  const min = 0;
  const max = +Math.max(...prezzi).toFixed() + 1;
  const [values, setValues] = useState([min, max]);

  const cerca = (ev) => {
    localStorage.setItem("ricerca", ev);
    const item = localStorage.getItem("ricerca");
    if (item !== "") {
      const searchTermsArray =
        typeof item === "string" ? item.toLowerCase().split(" ") : [];
      setFiltroRicerca(
        rangePrezzoArticoli.filter((art) =>
          searchTermsArray.every(
            (term) =>
              art.nomeArticolo.toLowerCase().startsWith(term) ||
              art.brand.toLowerCase().startsWith(term) ||
              art.descrizioneArticolo.toLowerCase().includes(term)
          )
        )
      );
    } else {
      setFiltroRicerca(undefined);
    }
  };

  useEffect(() => {
    dispatch(getArticoli()).then(() => setIsOnline(true));
    dispatch(getArticoliByPrezzo(min, max));
  }, [dispatch, max]);
  return (
    <>
      {articolo ? (
        <Container>
          <Row>
            <Col md={3}>
              <div className={`div-col3 ${light ? "nero" : "bianco"}`}>
                <h2 className={light ? " nero" : " bianco"}>Accessori PC</h2>
                <div className={`div-btn mb-2 ${light ? " nero" : " bianco"}`}>
                  <Button
                    onClick={() => {
                      dispatch(svuotaArticoli());
                      dispatch(getArticoliByPage(0, 9));
                    }}
                    className={light ? " nero" : " bianco"}
                  >
                    Mouse
                  </Button>
                  <Button
                    onClick={() => {
                      dispatch(svuotaArticoli());
                      dispatch(getArticoliByPage(2, 9));
                    }}
                    className={light ? " nero" : " bianco"}
                  >
                    Keyboard
                  </Button>
                  <Button
                    onClick={() => {
                      dispatch(svuotaArticoli());
                      dispatch(getArticoliByPage(1, 9));
                    }}
                    className={light ? " nero" : " bianco"}
                  >
                    Monitor
                  </Button>

                  <Button
                    onClick={toggleShowA}
                    className={light ? " nero" : " bianco"}
                  >
                    Scegli Prezzo
                  </Button>
                  <Toast
                    className="ms-2 mt-2"
                    show={showA}
                    onClose={toggleShowA}
                  >
                    <Toast.Body>
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
                    </Toast.Body>
                  </Toast>

                  <Button
                    onClick={() => {
                      dispatch(svuotaArticoli());
                      dispatch(getArticoli());
                    }}
                    className={light ? " nero" : " bianco"}
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
                            <Card.Title
                              className={`titolo-card text-start ${
                                light ? " nero" : " bianco"
                              }`}
                            >
                              {e.nomeArticolo}
                            </Card.Title>
                            <Card.Text
                              className={`text-brand text-start ${
                                light ? " nero" : " bianco"
                              }`}
                            >
                              Brand: {e.brand}
                            </Card.Text>
                            <Card.Text
                              className={`${light ? " nero" : " bianco"}`}
                            >
                              {e.prezzo}€
                            </Card.Text>
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
                        placeholder="Cerca il tuo Prodotto           🔎"
                        className="barraRicerca "
                      />
                    </div>
                    {filtroRicerca !== undefined
                      ? filtroRicerca
                          .filter(
                            (art) =>
                              art.prezzo >= values[0] && art.prezzo <= values[1]
                          )
                          .map((e) => {
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
                                    <Card.Title
                                      className={`titolo-card text-start ${
                                        light ? " nero" : " bianco"
                                      }`}
                                    >
                                      {e.nomeArticolo}
                                    </Card.Title>
                                    <Card.Text
                                      className={`text-brand text-start ${
                                        light ? " nero" : " bianco"
                                      }`}
                                    >
                                      Brand: {e.brand}
                                    </Card.Text>
                                    <Card.Text
                                      className={` ${
                                        light ? " nero" : " bianco"
                                      }`}
                                    >
                                      {e.prezzo}€
                                    </Card.Text>
                                  </Card.Body>
                                </Card>
                              </>
                            );
                          })
                      : filtroRicerca === undefined &&
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
                                  <Card.Title
                                    className={`titolo-card text-start ${
                                      light ? " nero" : " bianco"
                                    }`}
                                  >
                                    {e.nomeArticolo}
                                  </Card.Title>
                                  <Card.Text
                                    className={`text-brand text-start ${
                                      light ? " nero" : " bianco"
                                    }`}
                                  >
                                    Brand: {e.brand}
                                  </Card.Text>
                                  <Card.Text
                                    className={light ? " nero" : " bianco"}
                                  >
                                    {e.prezzo}€
                                  </Card.Text>
                                </Card.Body>
                              </Card>
                            </>
                          );
                        })
                      : null}
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
