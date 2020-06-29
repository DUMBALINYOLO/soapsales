import { ADD_BILLPAYMENT, GET_BILLPAYMENTS , DELETE_BILLPAYMENT } from '../types/billpaymentTypes';

const initialState = {
    billpayments: []
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_BILLPAYMENTS:
            return {
                ...state,
                billpayments: action.payload
            };
        case DELETE_BILLPAYMENT:
            return {
                ...state,
                billpayment: state.billpayments.filter(billpayment=> billpayment.id !== action.payload)
            };
        case ADD_BILLPAYMENT:
            return {
                ...state,
                billpayments: [...state.billpayments, action.payload]
            }
        default:
            return state;
    }
}
