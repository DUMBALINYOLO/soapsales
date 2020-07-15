import { GET_CURRENCIES, GET_CURRENCY, DELETE_CURRENCY, ADD_CURRENCY, UPDATE_CURRENCY  } from '../types/currencyTypes';

const initialState = {
    currencies: [],
    currency: [],
    loading: false
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
            };
        case GET_CURRENCY:
            return {
                ...state,
                currency: action.payload
            };
        case UPDATE_CURRENCY:
            return state.map(currency =>
                    currency.id === action.currency.id ? action.currency: currency
                );
           
        default:
            return state;
    }
}
