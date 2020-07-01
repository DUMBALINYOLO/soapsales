import { GET_PROCESSPRODUCTS, DELETE_PROCESSPRODUCT, ADD_PROCESSPRODUCT  } from "../types/processproductsTypes";

const initialState = {
    processproducts: []
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
            }
        default:
            return state;
    }
}
