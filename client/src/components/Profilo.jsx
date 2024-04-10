import { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUser, putUser } from "../redux/actions/userActions";

const Profilo = () => {
  const token = useSelector((state) => state.user.token);
  const idUser = useSelector((state) => state.user.idUser);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const input = {
    id: user.id,
    firstname: "aaaaaaaaaaaa",
    lastname: "rrrrrrrrrrrr",
    username: user.username,
    email: user.email,
    password: user.password,
    dataNascita: user.dataNascita,
    indirizzo: "l",
    numeroTelefono: "3dddddddddd",
    roles: user.roles,
    ordini: user.ordini,
    carrello: user.carrello,
  };
  useEffect(() => {
    dispatch(getUser(token, idUser));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Card>
        <Card.Header>PROFILO</Card.Header>
        <Card.Body>
          {user && user ? (
            <div>
              {user.id} {user.firstname} {user.lastname}
            </div>
          ) : (
            <div>Nessun ordine effettuato</div>
          )}
          <Button onClick={() => dispatch(putUser(idUser, token, input))}>
            Modifica Profilo
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Profilo;
