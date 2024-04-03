import {
  ARTICOLI,
  NOMEARTICOLI,
  PAGINAARTICOLI,
  RANGEPREZZOARTICOLI,
} from "../actions/articoliActions";

const initialState = {
  articoli: [],
  rangePrezzoArticoli: [],
  nomeArticoli: [],
  paginaArticoli: {},
};

const articoliReducer = (state = initialState, action) => {
  switch (action.type) {
    case ARTICOLI:
      return { ...state, articoli: action.payload };
    case PAGINAARTICOLI:
      return { ...state, paginaArticoli: action.payload };
    case RANGEPREZZOARTICOLI:
      return { ...state, rangePrezzoArticoli: action.payload };
    case NOMEARTICOLI:
      return { ...state, nomeArticoli: action.payload };

    default:
      return state;
  }
};

export default articoliReducer;
