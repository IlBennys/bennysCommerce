import "../assets/sass/Articoli.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getArticoli,
  getArticoliByPage,
  svuotaArticoli,
} from "../redux/actions/articoliActions";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FaCartPlus } from "react-icons/fa6";

const Articoli = () => {
  const articolo = useSelector((state) => state.articolo.articoli);
  const pageArticoli = useSelector((state) => state.articolo.paginaArticoli);
  //console.log(pageArticoli);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticoli());
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
                {pageArticoli.content
                  ? pageArticoli.content[0].id === 1
                    ? pageArticoli.content.map((e) => {
                        return (
                          <>
                            <Card key={e.id} className="m-1 card-main">
                              <Card.Img
                                variant="top"
                                className="img-card rounded-3 h-50"
                                src={e.img}
                              />
                              <p className="carrello-btn rounded-2">
                                <FaCartPlus />
                              </p>
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
                    : pageArticoli.content[0].id === 10
                    ? pageArticoli.content.map((e) => {
                        return (
                          <>
                            <Card key={e.id} className="m-1 card-main">
                              <Card.Img
                                className="img-card rounded-3 h-50"
                                variant="top"
                                src={e.img}
                              />
                              <p className="carrello-btn rounded-2">
                                <FaCartPlus />
                              </p>
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
                    : pageArticoli.content.map((e) => {
                        return (
                          <>
                            <Card key={e.id} className="m-1 card-main">
                              <Card.Img
                                variant="top"
                                className="img-card rounded-3 h-50"
                                src={e.img}
                              />
                              <p className="carrello-btn rounded-2">
                                <FaCartPlus />
                              </p>
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
                  : articolo.map((e) => {
                      return (
                        <>
                          <Card key={e.id} className="m-1 card-main">
                            <Card.Img
                              variant="top"
                              className="img-card rounded-3 h-50"
                              src={e.img}
                            />
                            <div className="carrello-btn rounded-2 ">
                              <p>
                                <FaCartPlus />
                              </p>
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
                    })}
              </Row>
            </Col>
          </Row>
        </Container>
      ) : (
        <p>caricamento...</p>
      )}
    </>
  );
};

export default Articoli;
