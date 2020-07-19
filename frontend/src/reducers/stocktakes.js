
import {
    GET_STOCK_TAKES,
    DELETE_STOCK_TAKE,
    ADD_STOCK_TAKE,
    GET_STOCK_TAKE
 
} from "../types/stockTakesTypes";


const initialState = {
    stocktakes: [],
    stocktake: [],
    loading: false
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_STOCK_TAKES:
            return {
                ...state,
                stocktakes: action.payload
            };
        case DELETE_STOCK_TAKE:
            return {
                ...state,
                stocktake  : state.stocktakes.filter(stocktake => stocktake.id !== action.payload)
            };
        case ADD_STOCK_TAKE:
            return {
                ...state,
                stocktakes: [...state.stocktakes, action.payload]
            };
        case GET_STOCK_TAKE:
            return {
                ...state,
                stocktake: action.payload
            };
        default:
            return state;
    }
}
