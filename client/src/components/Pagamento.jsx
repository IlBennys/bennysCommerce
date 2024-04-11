import { Button, Card } from "react-bootstrap";
import { svuotaCarrello } from "../redux/actions/carrelloActions";
import { useDispatch, useSelector } from "react-redux";

import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const Pagamento = () => {
  const idCarrello = useSelector((state) => state.carrello.idCarrello);
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  const stripePromise = loadStripe(
    "pk_test_51P3dbNJYEaEkhuu3Fa9O5isMN1H5umIJsH3uE3Tam9pJrqYy9y4kepZ08zX3meg9lHkno3O7o048Y3vJQBBEy6T40046kMGTp7"
  );

  return (
    <>
      {/* <Card>
        <Card.Header>ORDINE</Card.Header>
        <Card.Body>
          <Button variant="primary" onClick={() => dispatch(svuotaCarrello(idCarrello, token))}>
            Conferma ordine
          </Button>
        </Card.Body>
      </Card> */}

      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </>
  );
};

export default Pagamento;
