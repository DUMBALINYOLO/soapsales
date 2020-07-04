import { GET_PRODUCTLINES, GET_PRODUCTLINE, DELETE_PRODUCTLINE, ADD_PRODUCTLINE  } from "../types/productlineTypes";

const initialState = {
    productlines: [],
    productline: [],
    loading: false
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_PRODUCTLINES:
            return {
                ...state,
                productlines: action.payload
            };
        case DELETE_PRODUCTLINE:
            return {
                ...state,
                productline: state.productlines.filter(productline => productline.id !== action.payload)
            };
        case ADD_PRODUCTLINE:
            return {
                ...state,
                productline: [...state.productlines, action.payload]
            };
        case GET_PRODUCTLINE:
            return {
                ...state,
                productline: action.payload
            };
        default:
            return state;
    }
}
