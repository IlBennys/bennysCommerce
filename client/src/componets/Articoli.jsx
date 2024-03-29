import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticoli } from "../redux/actions/articoliActions";

const Articoli = () => {
  const articolo = useSelector((state) => state.articolo.articoli);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArticoli());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {articolo ? (
        <div>
          {articolo.map((e) => (
            <div key={e.id}>
              <p>{e.nomeArticolo}</p>
              <p>{e.prezzo}</p>
              <p>{e.img}</p>
              <p>{e.descriozioneArticolo}</p>
              <p>{e.brand}</p>
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
