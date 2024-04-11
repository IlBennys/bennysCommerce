import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { registrazioneCustomer } from "../redux/actions/pagamentoActions";

function CheckoutForm() {
  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.user.token);
  const idUser = useSelector((state) => state.user.idUser);
  const idCarrello = useSelector((state) => state.carrello.idCarrello);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const [validated, setValidated] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      const validationErrors = {};
      if (formData.cardNumber.length !== 12) {
        validationErrors.cardNumber = "Il numero della carta deve contenere esattamente 12 cifre.";
      }
      if (formData.expirationDate === undefined || formData.expirationDate === null) {
        validationErrors.expirationDate = "La data di scadenza non può essere vuota.";
      }
      if (formData.cvv === undefined || formData.cvv === null) {
        validationErrors.cvv = "Il numero del CVV non può essere vuoto.";
      }
    }
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="cardNumber">
          <Form.Label className="text-light">Numero Carta</Form.Label>
          <Form.Control
            type="text"
            placeholder="Numero Carta"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleInputChange}
            required
            isInvalid={!!errors.cardNumber}
            minLength={12}
            maxLength={12}
          />
          <Form.Control.Feedback type="invalid">{errors.cardNumber}</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="expirationDate">
          <Form.Label className="text-light">Scadenza</Form.Label>
          <Form.Control
            type="text"
            placeholder="MM/YY"
            name="expirationDate"
            value={formData.expirationDate}
            onChange={handleInputChange}
            required
            minLength={5}
            pattern="\d{2}/\d{2}"
            maxLength={5}
          />
          <Form.Control.Feedback type="invalid">Please provide a valid expiration date.</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} controlId="cvv">
          <Form.Label className="text-light">CVV</Form.Label>
          <Form.Control
            type="text"
            placeholder="CVV"
            name="cvv"
            value={formData.cvv}
            onChange={handleInputChange}
            required
            minLength={3}
            maxLength={3}
          />
          <Form.Control.Feedback type="invalid">Please provide a valid CVV.</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button
        type="submit"
        disabled={!formData.cardNumber || !formData.expirationDate || !formData.cvv}
        onClick={() => {
          dispatch(registrazioneCustomer(user, token, idUser, idCarrello)).then(() =>
            alert("Ordine andato a buon fine!")
          );
        }}
      >
        Invia
      </Button>
    </Form>
  );
}

export default CheckoutForm;
