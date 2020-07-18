import { GET_PROCESSEDPRODUCTCOMPONENTS, GET_PROCESSEDPRODUCTCOMPONENT, DELETE_PROCESSEDPRODUCTCOMPONENT, ADD_PROCESSEDPRODUCTCOMPONENT  } from "../types/processedproductcomponentTypes";

const initialState = {
    processedproductcomponents: [],
    processedproductcomponent: [],
    loading: false
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_PROCESSEDPRODUCTCOMPONENTS:
            return {
                ...state,
                processedproductcomponents: action.payload
            };
        case DELETE_PROCESSEDPRODUCTCOMPONENT:
            return {
                ...state,
                processedproductcomponent: state.processedproductcomponents.filter(processedproductcomponent => processedproductcomponent.id !== action.payload)
            };
        case ADD_PROCESSEDPRODUCTCOMPONENT:
            return {
                ...state,
                processedproductcomponent: [...state.processedproductcomponents, action.payload]
            };
        case GET_PROCESSEDPRODUCTCOMPONENT:
            return {
                ...state,
                processedproductcomponent: action.payload
            };
        default:
            return state;
    }
}
