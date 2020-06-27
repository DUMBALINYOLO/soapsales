import { ADD_ORDER, GET_ORDERS , DELETE_ORDER } from '../types/orderTypes';

const initialState = {
    orders: []
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_ORDERS:
            return {
                ...state,
                orders: action.payload
            };
        case DELETE_ORDER:
            return {
                ...state,
                order: state.orders.filter(order=> order.id !== action.payload)
            };
        case ADD_ORDER:
            return {
                ...state,
                orders: [...state.orders, action.payload]
            }
        default:
            return state;
    }
}
