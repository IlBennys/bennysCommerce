import { ORDINI, ADD_ID_ORDINE, ADD_ORDINE } from "../actions/ordiniActions";

const initialState = {
  ordini: [],
  idOrdine: "",
  addOrdine: {},
};

const ordiniReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDINI:
      return {
        ...state,
        ordini: action.payload,
      };
    case ADD_ID_ORDINE:
      return {
        ...state,
        idOrdine: action.payload,
      };
    case ADD_ORDINE:
      return {
        ...state,
        addOrdine: action.payload,
      };
    default:
      return state;
  }
};

export default ordiniReducer;
