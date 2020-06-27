import { ADD_PAYMENT, GET_PAYMENTS , DELETE_PAYMENT } from '../types/paymentTypes';

const initialState = {
    payments: []
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_PAYMENTS:
            return {
                ...state,
                payments: action.payload
            };
        case DELETE_PAYMENT:
            return {
                ...state,
                payment: state.payments.filter(payment=> payment.id !== action.payload)
            };
        case ADD_PAYMENT:
            return {
                ...state,
                payment: [...state.payments, action.payload]
            }
        default:
            return state;
    }
}
