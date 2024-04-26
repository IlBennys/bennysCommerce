import "../assets/sass/Login.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/actions/userActions";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { RiLockPasswordFill } from "react-icons/ri";

const Login = ({ light }) => {
  const user = {
    username: "",
    password: "",
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
      <Container className="contenitore mt-5">
        <div className="parent">
          <div className="div1 rounded-3"> </div>
          <div className="div2 rounded-3">
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
                  Username
                </Form.Label>
                <Form.Control
                  autoComplete="on"
                  onChange={(e) => handleChange("username", e.target.value)}
                  type="text"
                  placeholder="Enter username"
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
                <p
                  className={`${
                    light ? "nero" : "bianco"
                  } fst-italic fw-semibold d-flex flex-column align-items-center mt-3`}
                >
                  Non sei ancora regitsrato?
                  <a href="/Register" id="collegamento" className="d-flex">
                    clicca qui per farlo!
                  </a>
                </p>
              </Form.Group>
            </Form>
            <div className="text-center">
              <Button
                id="coloreRegister"
                variant="outline-light"
                style={{ width: "auto" }}
                onClick={() => {
                  dispatch(loginUser(input));
                }}
                className="fw-bolder"
              >
                LOGIN
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
