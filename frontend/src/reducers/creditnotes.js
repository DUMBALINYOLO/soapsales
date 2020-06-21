import { ADD_CREDITNOTE, GET_CREDITNOTES , DELETE_CREDITNOTE } from '../actions/types.js';

const initialState = {
    creditnotes: []
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
            }
        default:
            return state;
    }
}
