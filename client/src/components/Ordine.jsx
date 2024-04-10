import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { trovaIdOrdine } from "../redux/actions/ordiniActions";
import { quantita, filterArticles } from "../redux/actions/carrelloActions";

const Ordine = () => {
  const idCarrello = useSelector((state) => state.carrello.idCarrello);
  const carrello = useSelector((state) => state.carrello.carrello);
  const token = useSelector((state) => state.user.token);
  const idUser = useSelector((state) => state.user.idUser);
  const addOrdine = useSelector((state) => state.ordine.addOrdine);
  console.log(addOrdine);
  const dispatch = useDispatch();
  const articoliFiltrati = dispatch(filterArticles(carrello.articoli));
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    dispatch(trovaIdOrdine(token, idUser, idCarrello, carrello)).then(() =>
      setIsEmpty(true)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Card>
        <Card.Header>ORDINE</Card.Header>
        <Card.Body>
          {!isEmpty ? (
            <div>Nessun articolo nell'ordine</div>
          ) : addOrdine && addOrdine.articoli ? (
            articoliFiltrati.map((e) => (
              <>
                <div key={e.id}>{e.nomeArticolo}</div>
                <div>
                  Quantità:
                  {dispatch(quantita(carrello.articoli, "id", e.id))}
                  <br />
                  prezzo:
                  {(
                    e.prezzo * dispatch(quantita(carrello.articoli, "id", e.id))
                  ).toFixed(2)}
                </div>
              </>
            ))
          ) : null}
          <Button variant="primary" href="/pagamento">
            Vai al pagamento
          </Button>
          <Button variant="primary" href="/carrello">
            Torna al Carrello
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Ordine;
