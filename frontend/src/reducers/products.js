import { GET_PRODUCTS, DELETE_PRODUCT, ADD_PRODUCT  } from "../actions/types.js";

const initialState = {
    products: []
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            };
        case DELETE_PRODUCT:
            return {
                ...state,
                product: state.products.filter(product => product.id !== action.payload)
            };
        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        default:
            return state;
    }
}
