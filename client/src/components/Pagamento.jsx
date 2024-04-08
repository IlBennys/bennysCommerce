import { Button, Card } from "react-bootstrap";
import { svuotaCarrello } from "../redux/actions/carrelloActions";
import { useDispatch, useSelector } from "react-redux";

const Pagamento = () => {
  const idCarrello = useSelector((state) => state.carrello.idCarrello);
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  return (
    <>
      <Card>
        <Card.Header>ORDINE</Card.Header>
        <Card.Body>
          <Button variant="primary" onClick={() => dispatch(svuotaCarrello(idCarrello, token))}>
            Conferma ordine
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Pagamento;
