import { GET_INVOICE_SALE_CHOICES } from '../actions/types.js';

const initialState = {
   invoicesalechoices : [],
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_INVOICE_SALE_CHOICES:
            return {
                ...state,
                invoicesalechoices : action.payload
            };
        default:
            return state;
    }
}
