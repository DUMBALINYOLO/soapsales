import { GET_UNITMEASURES, GET_UNITMEASURE, DELETE_UNITMEASURE, ADD_UNITMEASURE  } from '../types/unitmeasureTypes';

const initialState = {
    unitmeasures: [],
    unitmeasure: [],
    loading: false
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_UNITMEASURES:
            return {
                ...state,
                unitmeasures: action.payload
            };
        case DELETE_UNITMEASURE:
            return {
                ...state,
                unitmeasure: state.unitmeasures.filter(unitmeasure => unitmeasure.id !== action.payload)
            };
        case ADD_UNITMEASURE :
            return {
                ...state,
                unitmeasure: [...state.unitmeasures, action.payload]
            };
        case GET_UNITMEASURE:
            return {
                ...state,
                unitmeasure: action.payload
            };
        default:
            return state;
    }
}
