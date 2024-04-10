import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getOrdini } from "../redux/actions/ordiniActions";
import { quantita, filterArticles } from "../redux/actions/carrelloActions";

const Ordini = () => {
  const idCarrello = useSelector((state) => state.carrello.idCarrello);
  const token = useSelector((state) => state.user.token);
  const carrello = useSelector((state) => state.carrello.carrello);
  const idUser = useSelector((state) => state.user.idUser);
  const ordini = useSelector((state) => state.ordine.ordini);
  const dispatch = useDispatch();
  const articoliFiltrati = dispatch(filterArticles(carrello.articoli));

  useEffect(() => {
    dispatch(getOrdini(token, idUser, idCarrello));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Card>
        <Card.Header>ORDINI</Card.Header>
        <Card.Body>
          {ordini ? (
            ordini.map((e) => (
              <div key={e.id}>
                {articoliFiltrati.map((e) => (
                  <div>
                    nome: {e.nomeArticolo}
                    <br />
                    Quantità:
                    {dispatch(quantita(carrello.articoli, "id", e.id))}
                    <br />
                    prezzo:
                    {(
                      e.prezzo *
                      dispatch(quantita(carrello.articoli, "id", e.id))
                    ).toFixed(2)}
                  </div>
                ))}
              </div>
            ))
          ) : (
            <div>Nessun ordine effettuato</div>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default Ordini;
