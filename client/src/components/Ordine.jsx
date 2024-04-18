import "../assets/sass/Ordine.scss";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteOrdine } from "../redux/actions/ordiniActions";
import { quantita } from "../redux/actions/carrelloActions";
import { useState } from "react";

const Ordine = ({ show, onHide }) => {
  const token = useSelector((state) => state.user.token);
  const addOrdine = useSelector((state) => state.ordine.addOrdine);
  const idOrdine = useSelector((state) => state.ordine.idOrdine);
  const dispatch = useDispatch();
  let totaleOrdineCorrente = 0;
  const [switchChecked, setSwitchChecked] = useState(false);

  addOrdine?.articoli?.forEach((articolo) => {
    const quantitaArticolo = dispatch(
      quantita(addOrdine.articoli, "id", articolo.id)
    );
    const prezzoTotaleArticolo = (articolo.prezzo * quantitaArticolo).toFixed(
      2
    );
    totaleOrdineCorrente += parseFloat(prezzoTotaleArticolo);
  });
  return (
    <>
      <Modal show={show} backdrop="static" keyboard={false} centered>
        <Modal.Header className="header-mod">
          <Modal.Title className="fs-2 fw-bolder">RIEPILOGO ORDINE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="d-flex flex-column align-items-baseline mb-3">
              <div className="fw-bold text-decoration-underline fs-6 text-center mb-4">
                Totale dell'ordine: {totaleOrdineCorrente.toFixed(2)}€ +
                Spedizione: 2.99€ =
                {(
                  totaleOrdineCorrente + parseFloat(addOrdine.prezzoConsegna)
                ).toFixed(2)}
                €
              </div>

              <div className="form-order">
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="Accettare per andare al Pagamento"
                  checked={switchChecked}
                  onChange={(e) => setSwitchChecked(e.target.checked)}
                />
              </div>
            </div>
            <Modal.Footer className="d-flex align-items-center justify-content-around">
              <Button
                variant="outline-light"
                className="btn-bottom h-25"
                href="/pagamento"
                disabled={!switchChecked}
              >
                Vai al pagamento
              </Button>
              <Button
                variant="outline-light"
                className="btn-bottom h-25"
                onClick={() => {
                  onHide();
                  dispatch(deleteOrdine(idOrdine, token));
                }}
              >
                Torna al Carrello
              </Button>
            </Modal.Footer>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Ordine;
