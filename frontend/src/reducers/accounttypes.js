import { ADD_ACCOUNT_TYPE, GET_ACCOUNT_TYPES , DELETE_ACCOUNT_TYPE } from '../types/accounttypeTypes';

const initialState = {
    accounttypes: []
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_ACCOUNT_TYPES:
            return {
                ...state,
                accounttypes: action.payload
            };
        case DELETE_ACCOUNT_TYPE:
            return {
                ...state,
                accounttype: state.accounttypes.filter(accounttype=> accounttype.id !== action.payload)
            };
        case ADD_ACCOUNT_TYPE:
            return {
                ...state,
                accounttypes: [...state.accounttypes, action.payload]
            }
        default:
            return state;
    }
}
