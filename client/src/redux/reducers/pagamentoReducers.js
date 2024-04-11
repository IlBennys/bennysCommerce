import { ADD_ID_CUSTOMER, ADD_PAGAMENTO } from "../actions/pagamentoActions";

const initialState = {
  idCustomer: "",
  pagamento: {},
};

const pagamentoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ID_CUSTOMER:
      return { ...state, idCustomer: action.payload };
    case ADD_PAGAMENTO:
      return { ...state, pagamento: action.payload };
    default:
      return state;
  }
};

export default pagamentoReducer;
