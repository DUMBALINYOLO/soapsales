import { GET_PROCESS, DELETE_PROCESS, ADD_PROCESS  } from "../types/processTypes";

const initialState = {
    process: []
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_PROCESS:
            return {
                ...state,
                process: action.payload
            };
        case DELETE_PROCESS:
            return {
                ...state,
                process: state.process.filter(process => process.id !== action.payload)
            };
        case ADD_PROCESS:
            return {
                ...state,
                process: [...state.process, action.payload]
            }
        default:
            return state;
    }
}
