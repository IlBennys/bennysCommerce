import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import {
  countOccurrences,
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
  }, []);

  return (
    <>
      <Card>
        <Card.Header>CARRELLO</Card.Header>
        <Card.Body>
          {carrello && carrello.articoli ? (
            articoliFiltrati.map((e, i) => (
              <div key={i}>
                {e.nomeArticolo}
                {e.id}
                Quantità: {dispatch(countOccurrences(carrello.articoli, "id", e.id))}
                <Button onClick={() => dispatch(deleteCarrello(idCarrello, e.id, token))}>Elimina</Button>
              </div>
            ))
          ) : (
            <div>Nessun articolo nel carrello</div>
          )}
          <div>
            <Button onClick={() => dispatch(deleteAllCarrello(idCarrello, token))}>Elimina tutti</Button>
          </div>
          <Button variant="primary" onClick={() => dispatch(postOrdine(token, idUser, idCarrello))}>
            Procedi all'ordine
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Carrello;
