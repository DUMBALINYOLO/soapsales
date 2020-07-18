import { GET_PROCESSPRODUCTS, GET_PROCESSPRODUCT, DELETE_PROCESSPRODUCT, ADD_PROCESSPRODUCT  } from "../types/processproductTypes";

const initialState = {
    processproducts: [],
    processproduct: [],
    loading: false
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_PROCESSPRODUCTS:
            return {
                ...state,
                processproducts: action.payload
            };
        case DELETE_PROCESSPRODUCT:
            return {
                ...state,
                processproduct: state.processproducts.filter(processproduct => processproduct.id !== action.payload)
            };
        case ADD_PROCESSPRODUCT:
            return {
                ...state,
                processproduct: [...state.processproducts, action.payload]
            };
        case GET_PROCESSPRODUCT:
            return {
                ...state,
                processproduct: action.payload
            };
        default:
            return state;
    }
}
