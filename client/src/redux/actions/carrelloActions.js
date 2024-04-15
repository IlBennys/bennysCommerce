import axios from "axios";
export const CARRELLO = "CARRELLO";
export const ADD_ID_CARRELLO = "ADD_ID_CARRELLO";

export function trovaIdCarrello(idUser, token) {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost/api/carrello`, {
        method: "GET",
        headers: {
          Authorization: ` Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        const carrelloFiltrato = response.data.filter((e) => e.id === idUser);
        dispatch({
          type: ADD_ID_CARRELLO,
          payload: carrelloFiltrato[0].id,
        });
        dispatch(getCarrelloById(carrelloFiltrato[0].id, token));
      }
    } catch (error) {
      console.log("Errore nel trovaIdCarrello", error);
    }
  };
}

export function getCarrelloById(idCarrello, token) {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost/api/carrello/${idCarrello}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        dispatch({
          type: CARRELLO,
          payload: response.data,
        });
      }
    } catch (error) {
      console.error("Errore nel getCarrelloById", error);
    }
  };
}

export function postCarrello(idCarrello, idArticolo, token) {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `http://localhost/api/carrello/${idCarrello}/articoli/${idArticolo}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 201) {
        dispatch(getCarrelloById(idCarrello, token));
      }
    } catch (error) {
      console.error("Errore nel postCarrello", error);
    }
  };
}

export function quantita(array, property, value) {
  return () => {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i][property] === value) {
        count++;
      }
    }
    return count;
  };
}

export function filterArticles(articoli) {
  return () => {
    const uniqueArticles = [];
    articoli.forEach((articolo) => {
      if (!uniqueArticles.some((item) => item.id === articolo.id)) {
        uniqueArticles.push(articolo);
      }
    });
    return uniqueArticles;
  };
}

export function deleteCarrello(idCarrello, idArticolo, token) {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        `http://localhost/api/carrello/${idCarrello}/articoli/${idArticolo}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        dispatch(getCarrelloById(idCarrello, token));
      }
    } catch (error) {
      console.error("Errore nel deleteCarrello", error);
    }
  };
}

export function deleteAllCarrello(idCarrello, token) {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        `http://localhost/api/carrello/tutti/articoli/${idCarrello}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        dispatch(getCarrelloById(idCarrello, token));
      }
    } catch (error) {
      console.error("Errore nel deleteCarrello", error);
    }
  };
}

export function svuotaCarrello(idCarrello, token) {
  return (dispatch) => {
    dispatch(deleteAllCarrello(idCarrello, token));
    dispatch({
      type: CARRELLO,
      payload: [],
    });
    const home = () => {
      window.location.href = "/";
    };
    window.setTimeout(home, 500);
  };
}
