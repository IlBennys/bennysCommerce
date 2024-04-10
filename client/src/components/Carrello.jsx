import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import {
  quantita,
  deleteAllCarrello,
  deleteCarrello,
  filterArticles,
  getCarrelloById,
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
      <Card>
        <Card.Header>CARRELLO</Card.Header>
        <Card.Body>
          {carrello.articoli < 1 ? (
            <div>Nessun articolo nel carrello</div>
          ) : carrello && carrello.articoli ? (
            articoliFiltrati.map((e, i) => (
              <div key={i}>
                nome articolo: {e.nomeArticolo}
                <br />
                prezzo:
                {(
                  e.prezzo * dispatch(quantita(carrello.articoli, "id", e.id))
                ).toFixed(2)}
                <br />
                Quantità:
                {dispatch(quantita(carrello.articoli, "id", e.id))}
                <br />
                <Button
                  onClick={() =>
                    dispatch(deleteCarrello(idCarrello, e.id, token))
                  }
                >
                  Elimina
                </Button>
              </div>
            ))
          ) : null}

          <div>
            <Button
              disabled={carrello.articoli < 1}
              onClick={() => dispatch(deleteAllCarrello(idCarrello, token))}
            >
              Elimina tutti
            </Button>
          </div>
          <Button
            disabled={carrello.articoli < 1}
            variant="primary"
            onClick={() => dispatch(postOrdine(token, idUser, idCarrello))}
          >
            Procedi all'ordine
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Carrello;
