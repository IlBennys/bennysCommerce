import { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUser, putUser } from "../redux/actions/userActions";

const Profilo = () => {
  const token = useSelector((state) => state.user.token);
  const idUser = useSelector((state) => state.user.idUser);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(token, idUser));
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
          <Button onClick={() => dispatch(putUser(idUser, token))}>Modifica Profilo</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Profilo;
