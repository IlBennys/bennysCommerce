import "../assets/sass/Profilo.scss";
import { useEffect, useState } from "react";
import { Button, Card, Container, Form, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUser, patchUser } from "../redux/actions/userActions";

const Profilo = () => {
  const token = useSelector((state) => state.user.token);
  const idUser = useSelector((state) => state.user.idUser);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const [input, setInput] = useState(user);
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
      <Container className="divProfilo-tot d-flex flex-column align-items-center">
        <div className="divProfilo-uno w-100 ">
          <div className="text-div">
            <h1>CIAO {user.username}!</h1>
            <h4>
              Questo è il tuo profilo. <br /> Puoi modificare le tue
              informazioni.
            </h4>
          </div>
          <div className="img-copertina rounded-3 "></div>
        </div>

        <Card className="card-profilo w-100 m-4">
          <Card.Title className="d-flex align-items-center justify-content-between mt-3">
            <span className="ms-3 fw-bolder">IL MIO PROFILO</span>
            <Button className="me-3 btn-bottom-prof " onClick={handleShow}>
              Modifica Profilo
            </Button>
          </Card.Title>

          <div className="divProfilo-due rounded-3 p-3 mb-3 bg-light w-100">
            <div className="parent">
              <div className="div1">
                <Form.Group>
                  <Form.Label className="fw-bold">Nome</Form.Label>
                  <Form.Control
                    disabled
                    type="text"
                    value={user.firstname || ""}
                  />
                </Form.Group>
              </div>
              <div className="div2">
                <Form.Group>
                  <Form.Label className="fw-bold">Cognome</Form.Label>
                  <Form.Control
                    disabled
                    type="text"
                    value={user.lastname || ""}
                  />
                </Form.Group>
              </div>
              <div className="div3">
                <Form.Group>
                  <Form.Label className="fw-bold">Username</Form.Label>
                  <Form.Control
                    disabled
                    type="text"
                    value={user.username || ""}
                  />
                </Form.Group>
              </div>
              <div className="div4">
                <Form.Group>
                  <Form.Label className="fw-bold">Email</Form.Label>
                  <Form.Control
                    disabled
                    type="email"
                    value={user.email || ""}
                  />
                </Form.Group>
              </div>
              <div className="div5">
                <Form.Group>
                  <Form.Label className="fw-bold">Password</Form.Label>
                  <Form.Control
                    disabled
                    type="password"
                    value={"******" || ""}
                  />
                </Form.Group>
              </div>
              <div className="div6">
                <Form.Group>
                  <Form.Label className="fw-bold">Data di Nascita</Form.Label>
                  <Form.Control
                    disabled
                    type="date"
                    value={user.dataNascita || ""}
                  />
                </Form.Group>
              </div>
              <div className="div7">
                <Form.Group>
                  <Form.Label className="fw-bold">
                    Numero di Telefono
                  </Form.Label>
                  <Form.Control
                    disabled
                    type="text"
                    value={user.numeroTelefono || ""}
                  />
                </Form.Group>
              </div>
              <div className="div8">
                <Form.Group>
                  <Form.Label className="fw-bold">Indirizzo</Form.Label>
                  <Form.Control
                    disabled
                    type="text"
                    value={user.indirizzo || ""}
                  />
                </Form.Group>
              </div>
            </div>
          </div>
        </Card>
      </Container>

      <Modal
        centered
        show={show}
        onHide={handleClose}
        className="modale-Profilo"
      >
        <div className=" rounded-3 d-flex flex-column  mt-4 mb-3 w-100">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="d-flex flex-column align-items-center mb-3">
              <Form.Group
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
            </Row>
            <Row className="my-4 d-flex flex-column align-items-center">
              <Button
                className="coloreRegister fw-bolder"
                variant="outline-light"
                style={{ width: "auto" }}
                onClick={() => {
                  dispatch(patchUser(idUser, token, input));
                  handleClose();
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
