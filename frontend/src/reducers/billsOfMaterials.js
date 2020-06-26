import {
    GET_BILLS, ADD_BILL, DELETE_BILL
} from "../types/billTypes";

const initialState = {
    bills: []
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_BILLS:
            return {
                ...state,
                bills: action.payload
            };
        case DELETE_BILL:
            return {
                ...state,
                bill: state.bills.filter(bill => bill.id !== action.payload)
            };
        case ADD_BILL:
            return {
                ...state,
                bill: [...state.bills, action.payload]
            }
        default:
            return state;
    }
}
