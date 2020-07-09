import { ADD_ORDERPAYMENT, GET_ORDERPAYMENTS, GET_ORDERPAYMENT, DELETE_ORDERPAYMENT } from '../types/orderpaymentTypes';

const initialState = {
    orderpayments: [],
    orderpayment: [],
    loading: false,
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_ORDERPAYMENTS:
            return {
                ...state,
                orderpayments: action.payload
            };
        case DELETE_ORDERPAYMENT:
            return {
                ...state,
                orderpayment: state.orderpayments.filter(orderpayment=> orderpayment.id !== action.payload)
            };
        case ADD_ORDERPAYMENT:
            return {
                ...state,
                orderpayments: [...state.orderpayments, action.payload]
            };
        case GET_ORDERPAYMENT:
            return {
                ...state,
                orderpayment: action.payload
            };
        default:
            return state;
    }
}
