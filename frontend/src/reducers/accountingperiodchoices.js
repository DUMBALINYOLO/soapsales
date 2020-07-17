import { GET_ACCOUNTING_PERIOD_CHOICES } from '../actions/types.js';

const initialState = {
   accountingperiodchoices : [],
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_ACCOUNTING_PERIOD_CHOICES:
            return {
                ...state,
                accountingperiodchoices : action.payload
            };
        default:
            return state;
    }
}
