import { USER, ADD_TOKEN, USERNAME, ADD_ID_USER } from "../actions/userActions";

const initialState = {
  user: [],
  token: "",
  idUser: "",
  username: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER:
      return { ...state, user: action.payload };
    case ADD_TOKEN:
      return { ...state, token: action.payload };
    case ADD_ID_USER:
      return { ...state, idUser: action.payload };
    case USERNAME:
      return { ...state, username: action.payload };
    default:
      return state;
  }
};

export default userReducer;
