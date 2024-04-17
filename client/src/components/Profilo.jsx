import "../assets/sass/Profilo.scss";
import { useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { USER, getUser, putUser } from "../redux/actions/userActions";
import { RiLockPasswordFill } from "react-icons/ri";

const Profilo = () => {
  const token = useSelector((state) => state.user.token);
  const idUser = useSelector((state) => state.user.idUser);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const utenteUser = {
    id: user.id,
    firstname: "",
    lastname: "",
    username: user.username,
    email: user.email,
    password: user.password,
    dataNascita: "",
    indirizzo: "",
    numeroTelefono: "",
    roles: user.roles,
    ordini: user.ordini,
    carrello: user.carrello,
  };

  const [input, setInput] = useState(utenteUser);
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  const handleChange = (field, value) => {
    setInput((prev) => ({ ...prev, [field]: value }));
  };

  useEffect(() => {
    dispatch(getUser(token, idUser));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div>
        <div className=" rounded-3 d-flex flex-column  mt-4 mb-3 bg-light w-25">
          <p>firstname: {user.firstname}</p>
          <p>lastname: {user.lastname}</p>
          <p aria-disabled>username: *******</p>
          <p>email: {user.email}</p>
          <p>password: ******</p>
          <p>dataNascita: {user.dataNascita}</p>
          <p>numeroTelefono: {user.numeroTelefono}</p>
          <p>indirizzo: {user.indirizzo}</p>
        </div>
        <Button onClick={handleShow}>Modifica Profilo</Button>
      </div>

      <Modal show={show} onHide={handleClose} className="modale-Profilo">
        <div className=" rounded-3 d-flex flex-column  mt-4 mb-3 w-100">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="d-flex flex-column align-items-center mb-3">
              <Form.Group
                as={Col}
                md="4"
                className="d-flex flex-column align-items-center"
                controlId="validationCustom01"
              >
                <Form.Label className=" text-white fw-semibold fst-italic">
                  Nome
                </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Nome"
                  onChange={(e) => handleChange("firstname", e.target.value)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                md="4"
                className="d-flex flex-column align-items-center"
                controlId="validationCustom02"
              >
                <Form.Label className=" text-white fw-semibold fst-italic">
                  Cognome
                </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Cognome"
                  onChange={(e) => handleChange("lastname", e.target.value)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                md="4"
                className="d-flex flex-column align-items-center"
                controlId="validationCustom03"
              >
                <Form.Label className=" text-white fw-semibold fst-italic">
                  Data di nascita
                </Form.Label>
                <Form.Control
                  className="text-black "
                  required
                  type="date"
                  onChange={(e) => handleChange("dataNascita", e.target.value)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                md="4"
                className="d-flex flex-column align-items-center"
                controlId="validationCustom04"
              >
                <Form.Label className="label text-white fw-semibold fst-italic">
                  Indirizzo
                </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="inserire indirizzo"
                  onChange={(e) => handleChange("indirizzo", e.target.value)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                md="4"
                className="d-flex flex-column align-items-center"
                controlId="validationCustom05"
              >
                <Form.Label className="label text-white fw-semibold fst-italic">
                  Numero di telefono
                </Form.Label>
                <Form.Control
                  required
                  type="phone"
                  placeholder="inserire numero di telefono"
                  onChange={(e) =>
                    handleChange("numeroTelefono", e.target.value)
                  }
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              {/* <Form.Group
                as={Col}
                md="4"
                className="d-flex flex-column align-items-center"
                controlId="validationCustomEmail"
              >
                <Form.Label className="label text-white fw-semibold fst-italic">E-mail</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  <Form.Control
                    type="email"
                    placeholder="email"
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={(e) => handleChange("email", e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">Inserisci la tua email.</Form.Control.Feedback>
                </InputGroup>
              </Form.Group> */}
            </Row>
            <Row className="my-4 d-flex flex-column align-items-center">
              <Button
                className="coloreRegister fw-bolder"
                variant="outline-light"
                style={{ width: "auto" }}
                onClick={() => {
                  dispatch(putUser(idUser, token, input));
                }}
              >
                Salva Modifiche
              </Button>
            </Row>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default Profilo;
