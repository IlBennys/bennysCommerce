import { ADD_PAGAMENTO } from "../actions/pagamentoActions";

const initialState = {
  pagamento: {},
};

const pagamentoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PAGAMENTO:
      return { ...state, pagamento: action.payload };
    default:
      return state;
  }
};

export default pagamentoReducer;
