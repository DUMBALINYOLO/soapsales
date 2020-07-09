import { ADD_SALESREP, GET_SALESREPS, GET_SALESREP, DELETE_SALESREP } from '../types/salesrepTypes';

const initialState = {
    salesreps: [],
    salesrep: [],
    loading: false
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
            };
        case GET_SALESREP:
            return {
                ...state,
                salesrep: action.payload
            };
        default:
            return state;
    }
}
