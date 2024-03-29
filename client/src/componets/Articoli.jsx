import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticoli } from "../redux/actions/articoliActions";

const Articoli = () => {
  const articoli = useSelector((state) => state.user.Articoli);
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArticoli(token));
  }, [dispatch, token]);
  return (
    <>
      (
      <div>
        {articoli.map((e, i) => (
          <div>
            <p>{e.prezzo}</p>
          </div>
        ))}
      </div>
      ):(<p>caricamento...</p>)
    </>
  );
};

export default Articoli;
