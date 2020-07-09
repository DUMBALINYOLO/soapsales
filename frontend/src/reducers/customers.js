import { GET_CUSTOMERS, GET_CUSTOMER, DELETE_CUSTOMER, ADD_CUSTOMER  } from '../types/customerTypes';

const initialState = {
    customers: [],
    customer: [],
    loading: false
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_CUSTOMERS:
            return {
                ...state,
                customers: action.payload
            };
        case DELETE_CUSTOMER:
            return {
                ...state,
                customer: state.customers.filter(customer => customer.id !== action.payload)
            };
        case ADD_CUSTOMER:
            return {
                ...state,
                customer: [...state.customers, action.payload]
            };
        case GET_CUSTOMER:
            return {
                ...state,
                customer: action.payload
            };
        default:
            return state;
    }
}
