import { ADD_ACCOUNT, GET_ACCOUNTS , DELETE_ACCOUNT } from '../types/accountTypes';

const initialState = {
    accounts: []
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_ACCOUNTS:
            return {
                ...state,
                accounts: action.payload
            };
        case DELETE_ACCOUNT:
            return {
                ...state,
                accounttype: state.accounts.filter(account=> account.id !== action.payload)
            };
        case ADD_ACCOUNT:
            return {
                ...state,
                accounts: [...state.accounts, action.payload]
            }
        default:
            return state;
    }
}
