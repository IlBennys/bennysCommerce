import { CARRELLO, ADD_ID_CARRELLO } from "../actions/carrelloActions";

const initialState = {
  carrello: [],
  idCarrello: "",
};

const carrelloReducer = (state = initialState, action) => {
  switch (action.type) {
    case CARRELLO:
      return { ...state, carrello: action.payload };
    case ADD_ID_CARRELLO:
      return { ...state, idCarrello: action.payload };
    default:
      return state;
  }
};

export default carrelloReducer;
