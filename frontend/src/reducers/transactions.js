import { GET_TRANSACTIONS, DELETE_TRANSACTION  } from '../types/transactionTypes';

const initialState = {
    transactions: []
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
        default:
            return state;
    }
}
