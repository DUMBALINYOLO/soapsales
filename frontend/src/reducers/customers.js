import { GET_CUSTOMERS, DELETE_CUSTOMER, ADD_CUSTOMER  } from '../types/customerTypes';

const initialState = {
    customers: []
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
            }
        default:
            return state;
    }
}
