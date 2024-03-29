import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticoli } from "../redux/actions/articoliActions";

const Articoli = () => {
  const articolo = useSelector((state) => state.user.articoli);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArticoli());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {articolo ? (
        <div>
          {articolo.map((e, i) => (
            <div key={i}>
              <p>{e.nomeArticolo}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>caricamento...</p>
      )}
    </>
  );
};

export default Articoli;
