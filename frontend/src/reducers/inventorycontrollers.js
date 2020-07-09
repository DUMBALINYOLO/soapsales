import { ADD_INVENTORYCONTROLLER, GET_INVENTORYCONTROLLERS, GET_INVENTORYCONTROLLER, DELETE_INVENTORYCONTROLLER } from '../types/inventorycontrollerTypes';

const initialState = {
    inventorycontrollers: [],
    inventorycontroller: [],
    loading: false,
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_INVENTORYCONTROLLERS:
            return {
                ...state,
                inventorycontrollers: action.payload
            };
        case DELETE_INVENTORYCONTROLLER:
            return {
                ...state,
                inventorycontroller: state.inventorycontrollers.filter(inventorycontroller=> inventorycontroller.id !== action.payload)
            };
        case ADD_INVENTORYCONTROLLER:
            return {
                ...state,
                inventorycontroller: [...state.inventorycontroller, action.payload]
            };
        case GET_INVENTORYCONTROLLER:
            return {
                ...state,
                inventorycontroller: action.payload
            };
        default:
            return state;
    }
}
