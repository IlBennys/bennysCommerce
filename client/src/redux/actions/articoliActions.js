export const ARTICOLI = "ARTICOLI";

const axios = require("axios").default;

export async function getArticoli(token, dispatch) {
  try {
    const response = await axios.get("http://localhost/api/articolo", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    if (response.status === 200) {
      const data = await response;

      dispatch({
        type: ARTICOLI,
        payload: data,
      });
    }
  } catch (error) {
    console.log("errore fetch articoli", error);
  }
}
