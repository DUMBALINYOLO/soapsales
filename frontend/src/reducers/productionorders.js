import { GET_PRODUCTIONORDERS, GET_PRODUCTIONORDER, DELETE_PRODUCTIONORDER, ADD_PRODUCTIONORDER  } from "../types/productionorderTypes";

const initialState = {
    productionorders: [],
    productionorder: [],
    loading: false
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_PRODUCTIONORDERS:
            return {
                ...state,
                productionorders: action.payload
            };
        case DELETE_PRODUCTIONORDER:
            return {
                ...state,
                productionorder: state.productionorders.filter(productionorder => productionorder.id !== action.payload)
            };
        case ADD_PRODUCTIONORDER:
            return {
                ...state,
                productionorder: [...state.productionorders, action.payload]
            };
        case GET_PRODUCTIONORDER:
            return {
                ...state,
                productionorder: action.payload
            };
        default:
            return state;
    }
}
