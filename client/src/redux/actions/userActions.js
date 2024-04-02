import axios from "axios";
import { ARTICOLI } from "./articoliActions";
import { ADD_ID_CARRELLO, CARRELLO, trovaIdCarrello } from "./carrelloActions";
import { ADD_ID_ORDINE, ORDINI } from "./ordiniActions";
import { ORDINE } from "../../../../PROGETTO FINALE/Capstone-FE/src/redux/action";

export const USER = "USER";
export const ADD_TOKEN = "ADD_TOKEN";
export const ADD_ID_USER = "ADD_ID_USER";
export const USERNAME = "USERNAME";

export const registrazioneUser = (input) => {
  return async () => {
    try {
      const response = await axios.post("http://localhost/api/auth/register", input, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        window.location.href = "http://localhost:3000/login";
      } else if (response.status === 400) {
        alert("EMAIL O PASSWORD GIA' ESISTENTI!");
      }
    } catch (error) {
      console.log("Errore registrazione user!", error);
    }
  };
};

export const loginUser = (input) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost/api/auth/register", input, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        dispatch({
          type: ADD_TOKEN,
          payload: response.data.accessToken,
        });
        dispatch({
          type: USERNAME,
          payload: response.data.username,
        });

        window.location.href = "http://localhost:3000/";
      } else if (response.status === 500) {
        alert("Email o Password errati");
      }
    } catch (error) {
      console.log("Errore registrazione user!", error);
    }
  };
};

export function logoutUser() {
  return (dispatch) => {
    dispatch({
      type: ADD_TOKEN,
      payload: "",
    });
    dispatch({
      type: USERNAME,
      payload: "",
    });
    dispatch({
      type: ADD_ID_USER,
      payload: "",
    });
    dispatch({
      type: ADD_ID_CARRELLO,
      payload: "",
    });
    dispatch({
      type: ADD_ID_ORDINE,
      payload: "",
    });
    dispatch({
      type: USER,
      payload: {},
    });
    dispatch({
      type: CARRELLO,
      payload: {},
    });
    dispatch({
      type: ORDINE,
      payload: {},
    });
    dispatch({
      type: ORDINI,
      payload: [],
    });
    dispatch({
      type: ARTICOLI,
      payload: [],
    });
    window.location.href = "/";
  };
}

export const trovaIdUser = (token, username) => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost/api/user", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        const userFiltrato = response.data.filter((e) => e.username === username);
        dispatch({
          type: ADD_ID_USER,
          payload: userFiltrato,
        });
        dispatch(getUser(userFiltrato[0].id, token));
        dispatch(trovaIdCarrello(userFiltrato[0].id, token));
      }
    } catch (error) {
      console.log("Errore nel trovaIdUser", error);
    }
  };
};

export const getUser = (token, idUser) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost/api/user/${idUser}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        dispatch({
          type: USER,
          payload: response.data,
        });
      }
    } catch (error) {
      console.log("Errore nel getUser", error);
    }
  };
};

export const putUser = (idUser, token, input, username) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`http://localhost/api/user/${idUser}`, input, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        dispatch({
          type: USER,
          payload: {},
        });
        dispatch(getUser(username, token));
      }
    } catch (error) {
      console.log("Errore nel putUser", error);
    }
  };
};
