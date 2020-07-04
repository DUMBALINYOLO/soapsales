import { ADD_EQUIPMENTCOMPONENT, GET_EQUIPMENTCOMPONENTS, GET_EQUIPMENTCOMPONENT, DELETE_EQUIPMENTCOMPONENT } from '../types/equipmentcomponentTypes';

const initialState = {
    equipmentcomponents: [],
    equipmentcomponent: [],
    loading: false
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_EQUIPMENTCOMPONENTS:
            return {
                ...state,
                equipmentcomponents: action.payload
            };
        case DELETE_EQUIPMENTCOMPONENT:
            return {
                ...state,
                equipmentcomponent: state.equipmentcomponents.filter(equipmentcomponent=> equipmentcomponent.id !== action.payload)
            };
        case ADD_EQUIPMENTCOMPONENT:
            return {
                ...state,
                equipmentcomponent: [...state.equipmentcomponents, action.payload]
            };
        case GET_EQUIPMENTCOMPONENT:
            return {
                ...state,
                equipmentcomponent: action.payload
            };
        default:
            return state;
    }
}
