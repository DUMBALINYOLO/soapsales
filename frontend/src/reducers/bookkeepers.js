import { GET_BOOKKEEPERS, GET_BOOKKEEPER, DELETE_BOOKKEEPER, ADD_BOOKKEEPER  } from '../types/bookkeeperTypes';

const initialState = {
    bookkeepers: [],
    bookkeeper: [],
    loading: false
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
            };
        case GET_BOOKKEEPER:
            return {
                ...state,
                bookkeeper: action.payload
            };
        default:
            return state;
    }
}
