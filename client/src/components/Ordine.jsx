import { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { trovaIdOrdine } from "../redux/actions/ordiniActions";

const Ordine = () => {
  const idCarrello = useSelector((state) => state.carrello.idCarrello);
  const carrello = useSelector((state) => state.carrello.carrello);
  const token = useSelector((state) => state.user.token);
  const idUser = useSelector((state) => state.user.idUser);
  const addOrdine = useSelector((state) => state.ordine.addOrdine);
  console.log(addOrdine);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(trovaIdOrdine(token, idUser, idCarrello, carrello));
  }, []);

  return (
    <>
      <Card>
        <Card.Header>ORDINE</Card.Header>
        <Card.Body>
          {addOrdine && addOrdine.articoli ? (
            addOrdine.articoli.map((e) => <div key={e.id}>{e.nomeArticolo}</div>)
          ) : (
            <div>Nessun articolo nell'ordine</div>
          )}
          <Button variant="primary" href="/pagamento">
            Vai al pagamento
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Ordine;
