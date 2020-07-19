import { GET_PRODUCTCOMPONENTS, GET_PRODUCTCOMPONENT, DELETE_PRODUCTCOMPONENT, ADD_PRODUCTCOMPONENT  } from "../types/productcomponentTypes";

const initialState = {
    productcomponents: [],
    productcomponent: [],
    loading: false
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_PRODUCTCOMPONENTS:
            return {
                ...state,
                productcomponents: action.payload
            };
        case DELETE_PRODUCTCOMPONENT:
            return {
                ...state,
                productcomponent: state.productcomponents.filter(productcomponent => productcomponent.id !== action.payload)
            };
        case ADD_PRODUCTCOMPONENT:
            return {
                ...state,
                productcomponent: [...state.productcomponents, action.payload]
            };
        case GET_PRODUCTCOMPONENT:
            return {
                ...state,
                productcomponent: action.payload
            };
        default:
            return state;
    }
}
