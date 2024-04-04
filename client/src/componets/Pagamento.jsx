import { Button, Card } from "react-bootstrap";
import { svuotaCarrello } from "../redux/actions/carrelloActions";
import { useDispatch, useSelector } from "react-redux";

const Pagamento = () => {
  const idCarrello = useSelector((state) => state.carrello.idCarrello);
  const carrello = useSelector((state) => state.carrello.carrello);
  const token = useSelector((state) => state.user.token);
  const idUser = useSelector((state) => state.user.idUser);
  const addOrdine = useSelector((state) => state.ordine.addOrdine);
  const dispatch = useDispatch();

  return (
    <>
      <Card>
        <Card.Header>ORDINE</Card.Header>
        <Card.Body>
          <Button
            variant="primary"
            onClick={() => dispatch(svuotaCarrello(carrello, idCarrello, token))} /* href="/home" */
          >
            Conferma ordine
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Pagamento;
