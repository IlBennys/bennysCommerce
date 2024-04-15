import "../assets/sass/Carrello.scss";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { LiaCartArrowDownSolid } from "react-icons/lia";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import {
  quantita,
  deleteAllCarrello,
  deleteCarrello,
  filterArticles,
  getCarrelloById,
  postCarrello,
} from "../redux/actions/carrelloActions";
import { postOrdine } from "../redux/actions/ordiniActions";

const Carrello = () => {
  const idCarrello = useSelector((state) => state.carrello.idCarrello);
  const carrello = useSelector((state) => state.carrello.carrello);
  const token = useSelector((state) => state.user.token);
  const idUser = useSelector((state) => state.user.idUser);
  const dispatch = useDispatch();
  const articoliFiltrati = dispatch(filterArticles(carrello.articoli));

  useEffect(() => {
    dispatch(getCarrelloById(idCarrello, token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Card className="c-tot">
        <Card.Body>
          {carrello.articoli < 1 ? (
            <div className="div-noArt d-flex align-items-center justify-content-center">
              <span className="load me-5"></span>
              <span className="text-white fs-1">
                Nessun Aticolo Nel Carrello
              </span>
              <span className="load ms-5"></span>
            </div>
          ) : carrello && carrello.articoli ? (
            articoliFiltrati.map((e, i) => (
              <div
                key={i}
                className="d-flex align-items-center justify-content-center"
              >
                <Card className="c-main m-3 p-2 rounded-3">
                  <div className="c-div d-flex flex-row align-items-center">
                    <Card.Img variant="top" className="c-img " src={e.img} />
                    <Card.Body className="c-body ">
                      <Card.Text className="first-c-text text-center fs-3 fw-bold">
                        Articolo: {e.nomeArticolo} - {e.brand}
                      </Card.Text>

                      <Card.Text className="second-c-text d-flex align-items-center justify-content-center rounded-3 h-25">
                        <span className="me-3 fs-4">
                          <FaMinusCircle
                            title="Rimuovi Articolo"
                            onClick={() =>
                              dispatch(deleteCarrello(idCarrello, e.id, token))
                            }
                          />
                        </span>

                        <span className="fs-4">
                          <span className="me-3">Quantità:</span>
                          {dispatch(quantita(carrello.articoli, "id", e.id))}
                        </span>

                        <span className="ms-3 fs-4">
                          <FaPlusCircle
                            title="Aggiungi Articolo"
                            onClick={() =>
                              dispatch(postCarrello(idCarrello, e.id, token))
                            }
                          />
                        </span>
                      </Card.Text>
                      <Card.Text className="thirth-c-text text-center fs-4 rounded-3">
                        <span className="me-3">Prezzo:</span>
                        {(
                          e.prezzo *
                          dispatch(quantita(carrello.articoli, "id", e.id))
                        ).toFixed(2)}
                        €
                      </Card.Text>
                    </Card.Body>
                  </div>
                </Card>
              </div>
            ))
          ) : null}
          {carrello.articoli.length > 0 ? (
            <div className="d-flex align-items-center justify-content-evenly mt-4">
              <Button
                className="btn-bottom h-25"
                disabled={carrello.articoli < 1}
                variant="primary"
                onClick={() => dispatch(postOrdine(token, idUser, idCarrello))}
              >
                Procedi all'ordine
              </Button>
              <Button
                className="btn-bottom  h-25"
                disabled={carrello.articoli < 1}
                onClick={() => dispatch(deleteAllCarrello(idCarrello, token))}
              >
                Svuota Carrello
              </Button>
            </div>
          ) : null}
        </Card.Body>
      </Card>
    </>
  );
};

export default Carrello;
