import { ADD_EQUIPMENTCOMPONENT, GET_EQUIPMENTCOMPONENTS , DELETE_EQUIPMENTCOMPONENT } from '../types/equipmentcomponentTypes';

const initialState = {
    equipmentcomponents: []
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
            }
        default:
            return state;
    }
}
