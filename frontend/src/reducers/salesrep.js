import { ADD_SALESREP, GET_SALESREPS, DELETE_SALESREP } from '../actions/types.js';

const initialState = {
    salesreps: []
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_SALESREPS:
            return {
                ...state,
                salesreps: action.payload
            };
        case DELETE_SALESREP:
            return {
                ...state,
                salesrep: state.salesreps.filter(salesrep=> salesrep.id !== action.payload)
            };
        case ADD_SALESREP:
            return {
                ...state,
                salesrep: [...state.salesreps, action.payload]
            }
        default:
            return state;
    }
}
