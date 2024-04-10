import { Button, Card } from "react-bootstrap";
import { svuotaCarrello } from "../redux/actions/carrelloActions";
import { useDispatch, useSelector } from "react-redux";
import { StripeProvider } from "@stripe/stripe-react-native";
const Pagamento = () => {
  const idCarrello = useSelector((state) => state.carrello.idCarrello);
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  return (
    <>
      <Card>
        <Card.Header>ORDINE</Card.Header>
        <Card.Body>
          <StripeProvider
            publishableKey="pk_test_51P3fC1LmwHifzdHVl3INAuiD8IiEAtLD2xXKejlPsblUQTd3oJ8zR6RO5yosLJWaI6Vs8zmf22McteJb6MVOaRS6008f5aCDOR"
            urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
            merchantIdentifier="merchant.com.{{YOUR_APP_NAME}}" // required for Apple Pay
          >
            // Your app code here
          </StripeProvider>
          <Button
            variant="primary"
            onClick={() => dispatch(svuotaCarrello(idCarrello, token))}
          >
            Conferma ordine
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Pagamento;
