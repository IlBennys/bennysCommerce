import axios from "axios";
import { ADD_ID_CARRELLO, CARRELLO, trovaIdCarrello } from "./carrelloActions";
import { ADD_ID_ORDINE, ADD_ORDINE, ORDINI } from "./ordiniActions";
import { ARTICOLI } from "./articoliActions";
import { ADD_PAGAMENTO } from "./pagamentoActions";

export const USER = "USER";
export const ADD_TOKEN = "ADD_TOKEN";
export const ADD_ID_USER = "ADD_ID_USER";
export const USERNAME = "USERNAME";

export function registrazioneUser(input) {
  return async () => {
    try {
      const response = await axios.post("http://localhost/api/auth/register", input, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) {
        console.log(response);
        window.location.href = "/login";
      } else if (response.status === 500) {
        alert("Email o Password errati");
      }
    } catch (error) {
      alert("testComment", error);
    }
  };
}

export function loginUser(input) {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost/api/auth/login", input, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        console.log(response);
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
}

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
      type: ADD_ORDINE,
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
    dispatch({
      type: ADD_PAGAMENTO,
      payload: {},
    });
    const home = () => {
      window.location.href = "/";
    };
    window.setTimeout(home, 500);
  };
}

export function trovaIdUser(token, username) {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost/api/user", {
        validateStatus: function (status) {
          return status < 500;
        },
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        const userFiltrato = response.data.filter((e) => e.username === username);
        dispatch({
          type: ADD_ID_USER,
          payload: userFiltrato[0].id,
        });
        dispatch(getUser(token, userFiltrato[0].id));
        dispatch(trovaIdCarrello(userFiltrato[0].id, token));
      }
    } catch (error) {
      console.log("Errore nel trovaIdUser", error);
    }
  };
}

export function getUser(token, idUser) {
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
}

export function putUser(idUser, token, input) {
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
        dispatch(getUser(token, idUser));
      }
    } catch (error) {
      console.log("Errore nel putUser", error);
    }
  };
}
