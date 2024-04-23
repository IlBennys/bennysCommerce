import "../assets/sass/Register.scss";
import { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { RiLockPasswordFill } from "react-icons/ri";
import { registrazioneUser } from "../redux/actions/userActions";

const Register = ({ light }) => {
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
      <Container className="contenitor mt-5">
        <div className="parente">
          <div className="div-1 rounded-3"> </div>
          <div className="div-2 rounded-3">
            <Form
              className="mt-3 p-3"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label
                  className={`text-center ${light ? "nero" : "bianco"}`}
                >
                  Nome
                </Form.Label>
                <Form.Control
                  autoComplete="on"
                  onChange={(e) => handleChange("firstname", e.target.value)}
                  type="text"
                  placeholder="Nome"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label
                  className={`text-center ${light ? "nero" : "bianco"}`}
                >
                  Cognome
                </Form.Label>
                <Form.Control
                  autoComplete="on"
                  onChange={(e) => handleChange("lastname", e.target.value)}
                  type="text"
                  placeholder="Cognome"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label
                  className={`text-center ${light ? "nero" : "bianco"}`}
                >
                  Username
                </Form.Label>
                <Form.Control
                  autoComplete="on"
                  onChange={(e) => handleChange("username", e.target.value)}
                  type="text"
                  placeholder="Username"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label
                  className={`text-center ${light ? "nero" : "bianco"}`}
                >
                  Data di Nascita
                </Form.Label>
                <Form.Control
                  autoComplete="on"
                  onChange={(e) => handleChange("dataNascita", e.target.value)}
                  type="date"
                  placeholder="Data di Nascita"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label
                  className={`text-center ${light ? "nero" : "bianco"}`}
                >
                  Indirizzo
                </Form.Label>
                <Form.Control
                  autoComplete="on"
                  onChange={(e) => handleChange("indirizzo", e.target.value)}
                  type="text"
                  placeholder="Indirizzo"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label
                  className={`text-center ${light ? "nero" : "bianco"}`}
                >
                  Mobile
                </Form.Label>
                <Form.Control
                  autoComplete="on"
                  onChange={(e) =>
                    handleChange("numeroTelefono", e.target.value)
                  }
                  type="phone"
                  placeholder="Mobile"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label
                  className={`text-center ${light ? "nero" : "bianco"}`}
                >
                  Email
                </Form.Label>
                <Form.Control
                  autoComplete="on"
                  onChange={(e) => handleChange("email", e.target.value)}
                  type="email"
                  placeholder="Email"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label className={light ? "nero" : "bianco"}>
                  Password
                </Form.Label>
                <Form.Control
                  autoComplete="on"
                  onChange={(e) => handleChange("password", e.target.value)}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
            </Form>
            <div className="text-center">
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
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Register;
