import { GET_PROCESSEDPRODUCTS, GET_PROCESSEDPRODUCT, DELETE_PROCESSEDPRODUCT, ADD_PROCESSEDPRODUCT  } from "../types/processedproductsTypes";

const initialState = {
    processedproducts: [],
    processedproduct: [],
    loading: false
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_PROCESSEDPRODUCTS:
            return {
                ...state,
                processedproducts: action.payload
            };
        case DELETE_PROCESSEDPRODUCT:
            return {
                ...state,
                processedproduct: state.processedproducts.filter(processedproduct => processedproduct.id !== action.payload)
            };
        case ADD_PROCESSEDPRODUCT:
            return {
                ...state,
                processedproduct: [...state.processedproducts, action.payload]
            };
        case GET_PROCESSEDPRODUCT:
            return {
                ...state,
                processedproduct: action.payload
            };
        default:
            return state;
    }
}
