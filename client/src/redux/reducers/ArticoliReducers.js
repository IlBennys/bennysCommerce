import {
  ARTICOLI,
  NOMEARTICOLI,
  PAGINAARTICOLI,
  RANGEPREZZOARTICOLI,
} from "../actions/articoliActions";

const initialState = {
  articoli: [],
  rangeprezzoarticoli: [],
  nomearticoli: [],
  paginaarticoli: [],
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ARTICOLI:
      return { ...state, articoli: action.payload };
    case PAGINAARTICOLI:
      return { ...state, paginaarticoli: action.payload };
    case RANGEPREZZOARTICOLI:
      return { ...state, rangeprezzoarticoli: action.payload };
    case NOMEARTICOLI:
      return { ...state, nomearticoli: action.payload };

    default:
      return state;
  }
};

export default userReducer;
