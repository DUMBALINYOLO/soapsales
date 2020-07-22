import { ADD_INVENTORYCATEGORY, GET_INVENTORYCATEGORIES, GET_INVENTORYCATEGORY, DELETE_INVENTORYCATEGORY } from '../types/inventorycategoryTypes';

const initialState = {
    inventorycategories: [],
    inventorycategory: [],
    loading: false,
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_INVENTORYCATEGORIES:
            return {
                ...state,
                inventorycategories: action.payload
            };
        case DELETE_INVENTORYCATEGORY:
            return {
                ...state,
                inventorycategory: state.inventorycategories.filter(inventorycategory=> inventorycategory.id !== action.payload)
            };
        case ADD_INVENTORYCATEGORY:
            return {
                ...state,
                inventorycategory: [...state.inventorycategories, action.payload]
            };
        case GET_INVENTORYCATEGORY:
            return {
                ...state,
                inventorycategory: action.payload
            };
        default:
            return state;
    }
}
