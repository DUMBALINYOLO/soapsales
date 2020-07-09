import { GET_PRODUCTS, DELETE_PRODUCT, ADD_PRODUCT, GET_PRODUCT  } from "../types/productTypes";


const initialState = {
    products: [],
    product: [],
    loading: false
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            };
        case GET_PRODUCT:
            return {
                ...state,
                product: action.payload
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
