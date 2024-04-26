import "../assets/sass/Register.scss";
import { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { RiLockPasswordFill } from "react-icons/ri";
import { registrazioneUser } from "../redux/actions/userActions";
import { IoArrowBackOutline } from "react-icons/io5";
import { GrLinkNext } from "react-icons/gr";

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

  const dispatch = useDispatch();
  const [input, setInput] = useState(user);
  const [validated, setValidated] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

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
          <div className="div-1 rounded-3 me-2"></div>
          <div className="div-2 rounded-3">
            <div className="d-flex justify-content-center">
              <div
                className="slime"
                style={{
                  background: currentStep >= 1 ? "rgb(120, 48, 255)" : "gray",
                }}
              ></div>
              <div
                className="slime"
                style={{
                  background: currentStep >= 2 ? "rgb(120, 48, 255)" : "gray",
                }}
              ></div>
              <div
                className="slime"
                style={{
                  background: currentStep >= 3 ? "rgb(120, 48, 255)" : "gray",
                }}
              ></div>
            </div>
            <Form
              className="mt-3 p-3"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              {currentStep === 1 && (
                <>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label
                      className={`text-center ${light ? "nero" : "bianco"}`}
                    >
                      Nome
                    </Form.Label>
                    <Form.Control
                      autoComplete="on"
                      onChange={(e) =>
                        handleChange("firstname", e.target.value)
                      }
                      type="text"
                      placeholder="Nome"
                      value={input.firstname}
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
                      value={input.lastname}
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
                      value={input.username}
                    />
                  </Form.Group>
                  <div className="d-flex justify-content-end ">
                    <Button className="btn-progress " onClick={handleNextStep}>
                      Next <GrLinkNext />
                    </Button>
                  </div>
                </>
              )}
              {currentStep === 2 && (
                <>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label
                      className={`text-center ${light ? "nero" : "bianco"}`}
                    >
                      Data di Nascita
                    </Form.Label>
                    <Form.Control
                      autoComplete="on"
                      onChange={(e) =>
                        handleChange("dataNascita", e.target.value)
                      }
                      type="date"
                      placeholder="Data di Nascita"
                      value={input.dataNascita}
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
                      onChange={(e) =>
                        handleChange("indirizzo", e.target.value)
                      }
                      type="text"
                      placeholder="Indirizzo"
                      value={input.indirizzo}
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
                      value={input.numeroTelefono}
                    />
                  </Form.Group>
                  <div className="d-flex justify-content-between align-items-center">
                    <Button
                      className="btn-progress"
                      onClick={handlePreviousStep}
                    >
                      <IoArrowBackOutline /> Back
                    </Button>
                    <Button className="btn-progress" onClick={handleNextStep}>
                      Next <GrLinkNext />
                    </Button>
                  </div>
                </>
              )}
              {currentStep === 3 && (
                <>
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
                      value={input.email}
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
                      value={input.password}
                    />
                  </Form.Group>
                  <Button className="btn-progress" onClick={handlePreviousStep}>
                    <IoArrowBackOutline /> Back
                  </Button>

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
                </>
              )}
            </Form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Register;
