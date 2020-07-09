import { GET_WASTEREPORTS, GET_WASTEREPORT, DELETE_WASTEREPORT, ADD_WASTEREPORT  } from "../types/wastereportTypes";

const initialState = {
    wastereports: [],
    wastereport: [],
    loading: false
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_WASTEREPORTS:
            return {
                ...state,
                wastereports: action.payload
            };
        case DELETE_WASTEREPORT:
            return {
                ...state,
                wastereport: state.wastereports.filter(wastereport => wastereport.id !== action.payload)
            };
        case ADD_WASTEREPORT:
            return {
                ...state,
                wastereports: [...state.wastereports, action.payload]
            };
        case GET_WASTEREPORT:
            return {
                ...state,
                wastereport: action.payload
            };
        default:
            return state;
    }
}
