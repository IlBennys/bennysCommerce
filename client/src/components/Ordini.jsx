import "../assets/sass/Ordini.scss";
import { useEffect } from "react";
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

  useEffect(() => {
    dispatch(getOrdini(token, idUser, idCarrello));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container>
        {ordini && ordini.length > 0 ? (
          ordini.map((ordine) => (
            <div key={ordine.id}>
              <h3 className="ordine-title">
                Ordine #{ordine.id} del {ordine.dataOrdine}
              </h3>
              <div className="p-1 rounded-3 bg-light mb-5">
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
                      <th>Costo Spedizione</th>
                      <th>Totale</th>
                    </tr>
                  </thead>
                  <tbody className="riga-body text-center">
                    {ordine.articoli.map((articolo, i) => (
                      <tr key={`${ordine.id}--${i}`}>
                        <td>{i + 1}</td>
                        <td>
                          {articolo.nomeArticolo} - {articolo.brand}
                        </td>
                        <td>
                          {dispatch(
                            quantita(ordine.articoli, "id", articolo.id)
                          )}
                        </td>
                        <td>
                          {(
                            articolo.prezzo *
                            dispatch(
                              quantita(ordine.articoli, "id", articolo.id)
                            )
                          ).toFixed(2)}
                          €
                        </td>
                        <td>{ordine.riepilogoOrdine}</td>

                        <td>{ordine.dataConsegna}</td>
                        <td>{ordine.statoOrdine}</td>
                        <td>{ordine.prezzoConsegna}</td>
                        <td>
                          {(
                            articolo.prezzo *
                              dispatch(
                                quantita(ordine.articoli, "id", articolo.id)
                              ) +
                            ordine.prezzoConsegna
                          ).toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          ))
        ) : (
          <div>Nessun ordine effettuato</div>
        )}
      </Container>
    </>
  );
};

export default Ordini;
