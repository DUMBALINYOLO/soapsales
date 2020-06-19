import { GET_BOOKKEEPERS, DELETE_BOOKKEEPER, ADD_BOOKKEEPER  } from '../actions/types.js';

const initialState = {
    bookkeepers: []
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_BOOKKEEPERS:
            return {
                ...state,
                bookkeepers: action.payload
            };
        case DELETE_BOOKKEEPER:
            return {
                ...state,
                bookkeeper: state.bookkeepers.filter(bookkeeper => bookkeeper.id !== action.payload)
            };
        case ADD_BOOKKEEPER:
            return {
                ...state,
                bookkeepers: [...state.bookkeepers, action.payload]
            }
        default:
            return state;
    }
}