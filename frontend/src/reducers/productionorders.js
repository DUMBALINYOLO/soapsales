import { GET_PRODUCTIONORDERS, DELETE_PRODUCTIONORDER, ADD_PRODUCTIONORDER  } from "../types/productionorderTypes";

const initialState = {
    productionorders: []
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
            }
        default:
            return state;
    }
}
