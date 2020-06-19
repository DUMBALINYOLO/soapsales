import { GET_PROCESSGROUPS, DELETE_PROCESSGROUP, ADD_PROCESSGROUP  } from "../actions/types.js";

const initialState = {
    processGroups: []
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_PROCESSGROUPS:
            return {
                ...state,
                processGroups: action.payload
            };
        case DELETE_PROCESSGROUP:
            return {
                ...state,
                processGroup: state.processGroups.filter(processGroup => processGroup.id !== action.payload)
            };
        case ADD_PROCESSGROUP:
            return {
                ...state,
                processGroups: [...state.processGroups, action.payload]
            }
        default:
            return state;
    }
}
