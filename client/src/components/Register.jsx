import { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { RiLockPasswordFill } from "react-icons/ri";
import { registrazioneUser } from "../redux/actions/userActions";

const Register = () => {
  const user = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    dataNascita: "",
    indirizzo: "",
    numeroTelefono: "",
    roles: ["ROLE_USER"],
  };

  const [input, setInput] = useState(user);
  const dispatch = useDispatch();
  const [validated, setValidated] = useState(false);

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
  return (
    <>
      <Container>
        <div className=" rounded-3 d-flex flex-column  mt-4 mb-3">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="d-flex flex-column align-items-center mb-3">
              <Form.Group
                as={Col}
                md="4"
                className="d-flex flex-column align-items-center"
                controlId="validationCustom01"
              >
                <Form.Label className=" text-white fw-semibold fst-italic">Nome</Form.Label>
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
                <Form.Label className=" text-white fw-semibold fst-italic">Cognome</Form.Label>
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
                controlId="validationCustomUsername"
              >
                <Form.Label className=" text-white fw-semibold fst-italic">Username</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={(e) => handleChange("username", e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group
                as={Col}
                md="4"
                className="d-flex flex-column align-items-center"
                controlId="validationCustom03"
              >
                <Form.Label className=" text-white fw-semibold fst-italic">Data di nascita</Form.Label>
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
                <Form.Label className="label text-white fw-semibold fst-italic">Indirizzo</Form.Label>
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
                <Form.Label className="label text-white fw-semibold fst-italic">Numero di telefono</Form.Label>
                <Form.Control
                  required
                  type="phone"
                  placeholder="inserire numero di telefono"
                  onChange={(e) => handleChange("numeroTelefono", e.target.value)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group
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
              </Form.Group>
              <Form.Group
                as={Col}
                md="4"
                className="d-flex flex-column align-items-center"
                controlId="validationCustomPassword"
              >
                <Form.Label className="label text-white fw-semibold fst-italic">Password</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend3">
                    <RiLockPasswordFill />
                  </InputGroup.Text>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    aria-describedby="inputGroupPrepend3"
                    required
                    onChange={(e) => handleChange("password", e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">Inserisci la tua password.</Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <Row className="my-4 d-flex flex-column align-items-center">
              <Button
                className="coloreRegister fw-bolder"
                variant="outline-light"
                style={{ width: "auto" }}
                onClick={() => {
                  dispatch(registrazioneUser(input));
                }}
              >
                Completa registrazione
              </Button>
            </Row>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default Register;
