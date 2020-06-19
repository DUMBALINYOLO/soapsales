import { GET_WASTEREPORTS, DELETE_WASTEREPORT, ADD_WASTEREPORT  } from "../actions/types.js";

const initialState = {
    wasteReports: []
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_WASTEREPORTS:
            return {
                ...state,
                wasteReports: action.payload
            };
        case DELETE_WASTEREPORT:
            return {
                ...state,
                wasteReport: state.wasteReports.filter(wasteReport => wasteReport.id !== action.payload)
            };
        case ADD_WASTEREPORT:
            return {
                ...state,
                wasteReports: [...state.wasteReports, action.payload]
            }
        default:
            return state;
    }
}
