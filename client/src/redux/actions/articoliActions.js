import axios from "axios";
export const ARTICOLI = "ARTICOLI";
export const RANGEPREZZOARTICOLI = "RANGEPREZZOARTICOLI";
export const NOMEARTICOLI = "NOMEARTICOLI";
export const PAGINAARTICOLI = "PAGINAARTICOLI";

export function getArticoli() {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost/api/articolo");
      if (response.status === 200) {
        dispatch({
          type: ARTICOLI,
          payload: response.data,
        });
      }
    } catch (error) {
      console.log("errore fetch articoli", error);
    }
  };
}

export function getArticoliById(articoloId) {
  return async () => {
    try {
      const response = await axios.get(`http://localhost/api/articolo/${articoloId}`);
      if (response.status === 200) {
        //console.log(response);
      }
    } catch (error) {
      console.log("errore fetch articoli", error);
    }
  };
}

export function getArticoliByPrezzo(s1, s2) {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost/api/articolo/prezzo/${s1}/${s2}`);
      if (response.status === 200) {
        dispatch({
          type: RANGEPREZZOARTICOLI,
          payload: response.data,
        });
      }
    } catch (error) {
      console.log("errore nel getArticoliByPrezzo", error);
    }
  };
}

export function getArticoliByName(name) {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost/api/articolo/name/${name}`);
      console.log("risposta", response);
      if (response.status === 200) {
        dispatch({
          type: NOMEARTICOLI,
          payload: response.data,
        });
      }
    } catch (error) {
      console.log("errore nel getArticoliByName", error);
    }
  };
}

export function getArticoliByPage(pageNum, pageSize) {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost/api/articolo/page/${pageNum}/${pageSize}`);
      console.log("risposta", response);
      if (response.status === 200) {
        dispatch({
          type: PAGINAARTICOLI,
          payload: response.data,
        });
      }
    } catch (error) {
      console.log("errore nel getArticoliByPage", error);
    }
  };
}

export function updateArticolo(articoloId, input, token) {
  return async (dispatch) => {
    try {
      const response = await axios.put(`http://localhost/api/articolo/${articoloId}`, input, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        dispatch({
          type: ARTICOLI,
          payload: [],
        });
        dispatch(getArticoli());
        console.log("Articolo aggiornato con successo:", response.data);
      }
    } catch (error) {
      console.error("Errore durante l'aggiornamento dell'articolo:", error);
    }
  };
}

export function deleteArticolo(articoloId, token) {
  return async () => {
    try {
      const response = await axios.delete(`http://localhost/api/articolo/${articoloId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        console.log("Articolo eliminato con successo");
      }
    } catch (error) {
      console.error("Errore durante l'aggiornamento dell'articolo:", error);
    }
  };
}
