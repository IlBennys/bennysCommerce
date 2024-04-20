import "../assets/sass/Ordini.scss";
import { useEffect, useState } from "react"; // Importa useState
import { Table, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getOrdini } from "../redux/actions/ordiniActions";
import { quantita } from "../redux/actions/carrelloActions";

const Ordini = () => {
  const idCarrello = useSelector((state) => state.carrello.idCarrello);
  const token = useSelector((state) => state.user.token);
  const idUser = useSelector((state) => state.user.idUser);
  const ordini = useSelector((state) => state.ordine.ordini);
  const dispatch = useDispatch();
  const [totaleOrdine, setTotaleOrdine] = useState(0);

  useEffect(() => {
    dispatch(getOrdini(token, idUser, idCarrello));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setTotaleOrdine(0);
  }, [ordini]);

  return (
    <>
      <Container>
        {ordini && ordini.length > 0 ? (
          ordini.map((ordine) => {
            let totaleOrdineCorrente = 0;
            return (
              <div key={ordine.id}>
                <div className="div-table p-1 rounded-3 mb-5">
                  <h4 className="ordine-title">
                    Ordine #{ordine.id} del {ordine.dataOrdine}
                  </h4>
                  <Table className="table-ordini" hover responsive>
                    <thead>
                      <tr className="riga-col text-center">
                        <th>#</th>
                        <th>Nome Articolo e Brand</th>
                        <th>Quantita</th>
                        <th>Prezzo</th>
                        <th>Riepilogo Ordine</th>
                        <th>Data Consegna</th>
                        <th>Stato Ordine</th>
                        <th>Totale</th>
                      </tr>
                    </thead>
                    <tbody className="riga-body text-center">
                      {ordine.articoli.map((articolo, i) => {
                        const quantitaArticolo = dispatch(
                          quantita(ordine.articoli, "id", articolo.id)
                        );
                        const prezzoTotaleArticolo = (
                          articolo.prezzo * quantitaArticolo
                        ).toFixed(2);
                        totaleOrdineCorrente +=
                          parseFloat(prezzoTotaleArticolo);
                        return (
                          <tr key={`${ordine.id}--${i}`}>
                            <td>{i + 1}</td>
                            <td>
                              {articolo.nomeArticolo} - {articolo.brand}
                            </td>
                            <td>{quantitaArticolo}</td>
                            <td>{prezzoTotaleArticolo}€</td>
                            <td>{ordine.riepilogoOrdine}</td>
                            <td>{ordine.dataConsegna}</td>
                            <td>{ordine.statoOrdine}</td>
                            <td>
                              {parseFloat(prezzoTotaleArticolo).toFixed(2)}€
                            </td>
                          </tr>
                        );
                      })}

                      <tr className="tot-ordine text-center">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="fw-bold totaleOrdineCorrente text-decoration-underline">
                          Totale dell'ordine: {totaleOrdineCorrente.toFixed(2)}€{" "}
                          Spedizione: 2.99€ ={" "}
                          {(
                            totaleOrdineCorrente +
                            parseFloat(ordine.prezzoConsegna)
                          ).toFixed(2)}
                          €
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            );
          })
        ) : (
          <div className="div-noArt d-flex align-items-center justify-content-center mt-5">
            <span className="load me-5"></span>
            <span className="text-white fs-1">Nessun Ordine Registrato</span>
            <span className="load ms-5"></span>
          </div>
        )}
      </Container>
    </>
  );
};

export default Ordini;
