import { GET_PROCESSMACHINES, DELETE_PROCESSMACHINE, ADD_PROCESSMACHINE  } from "../types/processmachineTypes";

const initialState = {
    processMachines: []
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_PROCESSMACHINES:
            return {
                ...state,
                processMachines: action.payload
            };
        case DELETE_PROCESSMACHINE:
            return {
                ...state,
                processMachine: state.processMachines.filter(processMachine => processMachine.id !== action.payload)
            };
        case ADD_PROCESSMACHINE:
            return {
                ...state,
                processMachines: [...state.processMachines, action.payload]
            }
        default:
            return state;
    }
}
