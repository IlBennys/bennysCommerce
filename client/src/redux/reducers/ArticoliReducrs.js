import { ARTICOLI } from "../actions/articoliActions";

const initialState = {
  ARTICOLI: [],
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ARTICOLI:
      return { ...state, token: action.payload };

    default:
      return state;
  }
};

export default userReducer;
