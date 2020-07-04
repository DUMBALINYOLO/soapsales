import { GET_PROCESSGROUPS, GET_PROCESSGROUP, DELETE_PROCESSGROUP, ADD_PROCESSGROUP  } from "../types/processgroupTypes";

const initialState = {
    processgroups: [],
    processgroup: [],
    loading: false,
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_PROCESSGROUPS:
            return {
                ...state,
                processgroups: action.payload
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
            };
        case GET_PROCESSGROUP:
            return {
                ...state,
                processgroup: action.payload
            };
        default:
            return state;
    }
}
