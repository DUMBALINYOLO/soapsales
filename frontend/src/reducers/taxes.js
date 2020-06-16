import { GET_TAXES, DELETE_TAX, ADD_TAX  } from '../actions/types.js';

const initialState = {
    taxes: []
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_TAXES:
            return {
                ...state,
                taxes: action.payload
            };
        case DELETE_TAX:
            return {
                ...state,
                tax: state.taxes.filter(tax => tax.id !== action.payload)
            };
        case ADD_TAX:
            return {
                ...state,
                taxes: [...state.taxes, action.payload]
            }
        default:
            return state;
    }
}
