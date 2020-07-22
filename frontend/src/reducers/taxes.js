import { GET_TAXES, GET_TAX, DELETE_TAX, ADD_TAX  } from '../actions/types.js';

const initialState = {
    taxes: [],
    tax: [],
    loading: false
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
            };
        case GET_TAX:
            return {
                ...state,
                tax: action.payload
            };
        default:
            return state;
    }
}
