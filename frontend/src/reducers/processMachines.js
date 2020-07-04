import { GET_PROCESSMACHINES, GET_PROCESSMACHINE, DELETE_PROCESSMACHINE, ADD_PROCESSMACHINE  } from "../types/processmachineTypes";

const initialState = {
    processmachines: [],
    processmachine: [],
    loading: false,
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_PROCESSMACHINES:
            return {
                ...state,
                processmachines: action.payload
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
            };
        case GET_PROCESSMACHINE:
            return {
                ...state,
                processmachine: action.payload
            };
        default:
            return state;
    }
}
