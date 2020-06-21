import { ADD_ORDERPAYMENT, GET_ORDERPAYMENTS , DELETE_ORDERPAYMENT } from '../actions/types.js';

const initialState = {
    orderpayments: []
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
            }
        default:
            return state;
    }
}
