import { GET_INVENTORY_RECEIPTS, GET_INVENTORY_RECEIPT, DELETE_INVENTORY_RECEIPT  } from '../types/inventoryreceiptTypes';

const initialState = {
    inventoryreceipts: [],
    inventoryreceipt: [],
    loading: false
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_INVENTORY_RECEIPTS:
            return {
                ...state,
                inventoryreceipts: action.payload
            };
        case DELETE_INVENTORY_RECEIPT:
            return {
                ...state,
                inventoryreceipt: state.inventoryreceipts.filter(inventoryreceipt => inventoryreceipt.id !== action.payload)
            };
        case GET_INVENTORY_RECEIPT:
            return {
                ...state,
                inventoryreceipt: action.payload
            };
        default:
            return state;
    }
}
