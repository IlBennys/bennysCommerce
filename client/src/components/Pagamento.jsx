import "../assets/sass/Pagamento.scss";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registrazioneCustomer } from "../redux/actions/pagamentoActions";
import { Button, Col, Form, InputGroup, Modal } from "react-bootstrap";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

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

  const [inputFields, setInputFields] = useState({
    email: "",
    titolare: "",
  });

  const validateValues = (inputValues) => {
    if (
      !inputValues.email.includes("@") ||
      !(inputValues.email.endsWith(".com") || inputValues.email.endsWith(".it"))
    ) {
      return false;
    }
    if (inputValues.titolare.trim() === "") {
      return false;
    }
    return true;
  };
  const isFormValid =
    cardNumber &&
    expirationDate &&
    cvv &&
    cardNumber.length === 19 &&
    expirationDate.length === 5 &&
    cvv.length === 3;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const input = e.target.value;
    const sanitizedInput = input.replace(/\D/g, "");
    const isCardNumberInput = e.target.name === "cardNumber";
    const isExpirationDateInput = e.target.name === "expirationDate";
    const isCvvInput = e.target.name === "cvv";
    const formattedInput = sanitizedInput.replace(/(\d{4})(?=\d)/g, "$1 ");

    if (isCardNumberInput) {
      if (sanitizedInput.length <= 16) {
        setCardNumber(formattedInput);
        setCardNumberTouched(true);
        setCardNumberIsValid(sanitizedInput.length === 16);
      }
    } else if (isExpirationDateInput) {
      if (sanitizedInput.length <= 4) {
        let formattedInput = sanitizedInput;
        if (sanitizedInput.length === 1 && parseInt(sanitizedInput) > 1) {
          formattedInput = `0${sanitizedInput}`;
        } else if (sanitizedInput.length >= 4) {
          formattedInput = sanitizedInput.replace(/(\d{2})(\d{0,2})/, "$1/$2");
          const [month, year] = formattedInput.split("/");
          const currentMonth = new Date().getMonth() + 1;
          const currentYear = new Date().getFullYear() % 100;

          if (
            parseInt(year, 10) < currentYear ||
            (parseInt(year, 10) === currentYear &&
              parseInt(month, 10) < currentMonth)
          ) {
            alert("Errore: La carta di credito è scaduta.");
          }
        }
        setExpirationDate(formattedInput);
        setExpirationDateTouched(true);
        setExpirationDateIsValid(sanitizedInput.length === 5);
      }
    } else if (isCvvInput) {
      if (/^\d+$/.test(input)) {
        if (sanitizedInput.length <= 3) {
          setCvv(formattedInput);
          setCvvTouched(true);
          setCvvIsValid(sanitizedInput.length === 3);
        }
      }
    }
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      dispatch(registrazioneCustomer(user, token, idUser, idCarrello));
      console.log("Pagamento completato con successo");
    } catch (error) {
      console.error("Errore durante la conferma del pagamento:", error);
      setErrorMessage("Si è verificato un errore imprevisto.");
    }
    setIsLoading(false);
    validateValues(inputFields);
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-center m-5 p-2">
        <Form id="payment-form" onSubmit={handleSubmit}>
          <h3 className="text-light fw-bolder">Paga con Carta</h3>
          <Form.Group
            className="mt-2"
            as={Col}
            md="10"
            controlId="validationFormikUsername"
          >
            <Form.Label className="text-light fw-bold fs-5 ">Email</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="email"
                placeholder="Email"
                aria-describedby="inputGroupPrepend"
                name="email"
                className="input"
                value={inputFields.email}
                onChange={handleChange}
                required
              />
            </InputGroup>
          </Form.Group>
          <Form.Group
            as={Col}
            md="10"
            controlId="validationFormikUsername"
            className="d-flex flex-column mt-2"
          >
            <Form.Label className="text-light fw-bold fs-5 ">
              Dati della carta
            </Form.Label>
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
          <Form.Group
            className="mt-2"
            as={Col}
            md="10"
            controlId="validationFormikUsername"
          >
            <Form.Label className="text-light fw-bold fs-5 ">
              Nome titolare
            </Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                placeholder="Nome e cognome"
                aria-describedby="inputGroupPrepend"
                name="titolare"
                className="input"
                value={inputFields.titolare}
                onChange={handleChange}
                required
              />
            </InputGroup>
          </Form.Group>
          <Form.Group
            className="mt-2"
            as={Col}
            md="10"
            controlId="validationFormikUsername"
          >
            <Form.Label className="text-light fw-bold fs-5 ">
              Paese o regione
            </Form.Label>
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
              disabled={
                isLoading || !isFormValid || !validateValues(inputFields)
              }
              onClick={(e) => {
                handleSubmit(e);
                handleShow();
              }}
              className="w-100 btn-bottom-card"
            >
              <div
                className={`spinner ${isLoading ? "" : "hidden"}`}
                id="spinner"
              ></div>
              <span id="button-text">
                {isLoading ? "Elaborazione..." : "Paga ora"}
              </span>
            </Button>
            <div id="payment-message" className={errorMessage ? "" : "hidden"}>
              {errorMessage}
            </div>
          </div>
        </Form>
      </div>
      <Modal show={show} onHide={handleClose} className="modal-container">
        <Modal.Header className="head-mod">
          Pagamento effettuato con successo!
          <span className="ms-1">
            <IoMdCheckmarkCircleOutline />
          </span>
        </Modal.Header>
      </Modal>
    </>
  );
};

export default Pagamento;
