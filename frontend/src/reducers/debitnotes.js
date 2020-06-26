import { ADD_DEBITNOTE, GET_DEBITNOTES , DELETE_DEBITNOTE } from '../types/debitnoteTypes';

const initialState = {
    debitnotes: []
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
            }
        default:
            return state;
    }
}
