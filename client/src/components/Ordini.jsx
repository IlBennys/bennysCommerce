import { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getOrdini, trovaIdOrdine } from "../redux/actions/ordiniActions";

const Ordini = () => {
  const idCarrello = useSelector((state) => state.carrello.idCarrello);
  const carrello = useSelector((state) => state.carrello.carrello);
  const token = useSelector((state) => state.user.token);
  const idUser = useSelector((state) => state.user.idUser);
  const ordini = useSelector((state) => state.ordine.ordini);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrdini(token, idUser, idCarrello));
  }, []);

  return (
    <>
      <Card>
        <Card.Header>ORDINI</Card.Header>
        <Card.Body>
          {ordini && ordini ? (
            ordini.map((e) => (
              <div key={e.id}>
                {e.id}
                {e.articoli.map((e) => e.nomeArticolo)}
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
