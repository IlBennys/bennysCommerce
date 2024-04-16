import "../assets/sass/Pagamento.scss";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registrazioneCustomer } from "../redux/actions/pagamentoActions";
import { Button, Col, Form, InputGroup, Modal } from "react-bootstrap";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { svuotaCarrello } from "../redux/actions/carrelloActions";

const Pagamento = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const idUser = useSelector((state) => state.user.idUser);
  const idCarrello = useSelector((state) => state.carrello.idCarrello);
  const token = useSelector((state) => state.user.token);
  const user = useSelector((state) => state.user.user);

  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardNumberIsValid, setCardNumberIsValid] = useState(false);
  const [expirationDateIsValid, setExpirationDateIsValid] = useState(false);
  const [cvvIsValid, setCvvIsValid] = useState(false);
  const [cardNumberTouched, setCardNumberTouched] = useState(false);
  const [expirationDateTouched, setExpirationDateTouched] = useState(false);
  const [cvvTouched, setCvvTouched] = useState(false);
  const isFormValid =
    cardNumberTouched &&
    cardNumberIsValid &&
    expirationDateTouched &&
    expirationDateIsValid &&
    cvvTouched &&
    cvvIsValid;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const input = e.target.value;
    const sanitizedInput = input.replace(/\D/g, "");
    const isCardNumberInput = e.target.name === "cardNumber";
    const isExpirationDateInput = e.target.name === "expirationDate";
    const isCvvInput = e.target.name === "cvv";
    if (isCardNumberInput) {
      const formattedInput = sanitizedInput.replace(/(\d{4})(?=\d)/g, "$1 ");
      if (sanitizedInput.length <= 16) {
        setCardNumber(formattedInput);
        setCardNumberTouched(true);
        setCardNumberIsValid(sanitizedInput.length === 16);
      }
    } else if (isExpirationDateInput) {
      if (sanitizedInput.length <= 4) {
        const formattedInput = sanitizedInput.replace(/(\d{2})(?=\d{2})/, "$1/");
        setExpirationDate(formattedInput);
        setExpirationDateTouched(true);
        setExpirationDateIsValid(sanitizedInput.length === 4);
      }
    } else if (isCvvInput) {
      if (/^\d+$/.test(input)) {
        if (sanitizedInput.length <= 3) {
          setCvv(sanitizedInput);
          setCvvTouched(true);
          setCvvIsValid(sanitizedInput.length === 3);
        }
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      dispatch(registrazioneCustomer(user, token, idUser, idCarrello));
      console.log("Pagamento completato con successo");
    } catch (error) {
      console.error("Errore durante la conferma del pagamento:", error);
      setErrorMessage("Si Ã¨ verificato un errore imprevisto.");
    }
    setIsLoading(false);
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-center m-5 p-2">
        <Form id="payment-form" onSubmit={handleSubmit}>
          <h3 className="text-dark fw-bolder">Paga con Carta</h3>
          <Form.Group className="mt-2" as={Col} md="10" controlId="validationFormikUsername">
            <Form.Label className="text-dark fw-bold fs-5 ">Email</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                placeholder="Email"
                aria-describedby="inputGroupPrepend"
                name="Email"
                className="input"
              />
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md="10" controlId="validationFormikUsername" className="d-flex flex-column mt-2">
            <Form.Label className="text-dark fw-bold fs-5 ">Dati della carta</Form.Label>
            <div className="divCartaUno">
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder="1234 1234 1234 1234"
                  aria-describedby="inputGroupPrepend"
                  name="cardNumber"
                  onChange={handleChange}
                  value={cardNumber}
                  required
                  className="carta"
                />
              </InputGroup>
            </div>
            <div className="divCartaDue d-flex ">
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder="MM/AA"
                  aria-describedby="inputGroupPrepend"
                  name="expirationDate"
                  value={expirationDate}
                  onChange={handleChange}
                  required
                  className="scadenza"
                />
              </InputGroup>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder="123"
                  value={cvv}
                  onChange={handleChange}
                  name="cvv"
                  minLength="3"
                  maxLength="3"
                  required
                  className="cvv"
                />
              </InputGroup>
            </div>
          </Form.Group>
          <Form.Group className="mt-2" as={Col} md="10" controlId="validationFormikUsername">
            <Form.Label className="text-dark fw-bold fs-5 ">Nome titolare</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                placeholder="Nome e cognome"
                aria-describedby="inputGroupPrepend"
                name="titolare"
                className="input"
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mt-2" as={Col} md="10" controlId="validationFormikUsername">
            <Form.Label className="text-dark fw-bold fs-5 ">Paese o regione</Form.Label>
            <Form.Select aria-label="Default select example" className="input">
              <option>Italia</option>
              <option value="1">USA</option>
              <option value="2">Francia</option>
              <option value="3">Spagna</option>
            </Form.Select>
          </Form.Group>

          <div className="col-md-10 mt-5">
            <Button
              type="submit"
              disabled={isLoading || !isFormValid}
              onClick={(e) => {
                handleSubmit(e);
                handleShow();
                //dispatch(svuotaCarrello());
              }}
              className="w-100"
            >
              <div className={`spinner ${isLoading ? "" : "hidden"}`} id="spinner"></div>
              <span id="button-text">{isLoading ? "Elaborazione..." : "Paga ora"}</span>
            </Button>
            <div id="payment-message" className={errorMessage ? "" : "hidden"}>
              {errorMessage}
            </div>
          </div>
        </Form>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="head-mod ">
          Pagamento andato a buon fine!
          <span className="ms-1 fs-3">
            <IoMdCheckmarkCircleOutline />
          </span>
        </Modal.Header>
      </Modal>
    </>
  );
};

export default Pagamento;
