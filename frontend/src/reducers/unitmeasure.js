import { GET_UNITMEASURES, DELETE_UNITMEASURE, ADD_UNITMEASURE  } from '../types/unitmeasureTypes';

const initialState = {
    unitmeasures: []
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
            }
        default:
            return state;
    }
}
