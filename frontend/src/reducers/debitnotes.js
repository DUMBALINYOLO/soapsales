import { ADD_DEBITNOTE, GET_DEBITNOTES, GET_DEBITNOTE, DELETE_DEBITNOTE } from '../types/debitnoteTypes';

const initialState = {
    debitnotes: [],
    debitnote: [],
    loading: false
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_DEBITNOTES:
            return {
                ...state,
                debitnotes: action.payload
            };
        case DELETE_DEBITNOTE:
            return {
                ...state,
                debitnote: state.debitnotes.filter(debitnote=> debitnote.id !== action.payload)
            };
        case ADD_DEBITNOTE:
            return {
                ...state,
                debitnote: [...state.debitnote, action.payload]
            };
        case GET_DEBITNOTE:
            return {
                ...state,
                debitnotes: action.payload
            };
        default:
            return state;
    }
}
