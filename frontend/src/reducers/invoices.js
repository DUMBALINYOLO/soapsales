import { ADD_INVOICE, GET_INVOICES , DELETE_INVOICE } from '../types/invoiceTypes';

const initialState = {
    invoices: []
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_INVOICES:
            return {
                ...state,
                invoices: action.payload
            };
        case DELETE_INVOICE:
            return {
                ...state,
                invoice: state.invoices.filter(invoice=> invoice.id !== action.payload)
            };
        case ADD_INVOICE:
            return {
                ...state,
                invoice: [...state.invoice, action.payload]
            }
        default:
            return state;
    }
}
