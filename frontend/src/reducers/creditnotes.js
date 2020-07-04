import { ADD_CREDITNOTE, GET_CREDITNOTES, GET_CREDITNOTE, DELETE_CREDITNOTE } from '../types/creditnoteTypes';

const initialState = {
    creditnotes: [],
    creditnote: [],
    loading: false
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_CREDITNOTES:
            return {
                ...state,
                creditnotes: action.payload
            };
        case DELETE_CREDITNOTE:
            return {
                ...state,
                creditnote: state.creditnotes.filter(creditnote=> creditnote.id !== action.payload)
            };
        case ADD_CREDITNOTE:
            return {
                ...state,
                creditnote: [...state.creditnotes, action.payload]
            };
        case GET_CREDITNOTE:
            return {
                ...state,
                creditnote: action.payload
            };
        default:
            return state;
    }
}
