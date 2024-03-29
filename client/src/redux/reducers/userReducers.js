import { USER, ADD_TOKEN, USERNAME } from "../actions/userActions";

const initialState = {
  user: [],
  token: "",
  username: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER:
      return { ...state, user: action.payload };
    case ADD_TOKEN:
      return { ...state, token: action.payload };
    case USERNAME:
      return { ...state, username: action.payload };
    default:
      return state;
  }
};

export default userReducer;
