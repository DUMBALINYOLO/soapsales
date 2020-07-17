import { GET_CUSTOMER_PAYMENT_METHOD_CHOICES } from '../actions/types.js';

const initialState = {
   customerpaymentmethodchoices : [],
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_CUSTOMER_PAYMENT_METHOD_CHOICES:
            return {
                ...state,
                customerpaymentmethodchoices : action.payload
            };
        default:
            return state;
    }
}
