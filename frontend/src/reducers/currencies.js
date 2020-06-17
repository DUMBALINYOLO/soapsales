import { GET_CURRENCIES, DELETE_CURRENCY, ADD_CURRENCY  } from '../actions/types.js';

const initialState = {
    currencies: []
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_CURRENCIES:
            return {
                ...state,
                currencies: action.payload
            };
        case DELETE_CURRENCY:
            return {
                ...state,
                currency: state.currencies.filter(currency => currency.id !== action.payload)
            };
        case ADD_CURRENCY :
            return {
                ...state,
                currencies: [...state.currencies, action.payload]
            }
        default:
            return state;
    }
}
