import { GET_TRANSACTIONS, GET_TRANSACTION, DELETE_TRANSACTION  } from '../types/transactionTypes';

const initialState = {
    transactions: [],
    transaction: [],
    loading: false
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_TRANSACTIONS:
            return {
                ...state,
                transactions: action.payload
            };
        case DELETE_TRANSACTION:
            return {
                ...state,
                transaction: state.transactions.filter(transaction => transaction.id !== action.payload)
            };
        case GET_TRANSACTION:
            return {
                ...state,
                transaction: action.payload
            };
        default:
            return state;
    }
}
