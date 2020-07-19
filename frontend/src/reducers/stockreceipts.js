import { 
    ADD_STOCK_RECEIPT, 
    GET_STOCK_RECEIPTS, 
    GET_STOCK_RECEIPT, 
    DELETE_STOCK_RECEIPT 
} from "../types/stockReceiptsTypes";

const initialState = {
    stockreceipts: [],
    stockreceipt: [],
    loading: false
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_STOCK_RECEIPTS:
            return {
                ...state,
                stockreceipts: action.payload
            };
        case DELETE_STOCK_RECEIPT:
            return {
                ...state,
                stockreceipt   : state.stockreceipts.filter(stockreceipt => stockreceipt.id !== action.payload)
            };
        case ADD_STOCK_RECEIPT:
            return {
                ...state,
                stockreceipts: [...state.stockreceipt, action.payload]
            };
        case GET_STOCK_RECEIPT:
            return {
                ...state,
                stockreceipt: action.payload
            };
        default:
            return state;
    }
}
