import { ADD_INVENTORYITEM, GET_INVENTORYITEMS, GET_INVENTORYITEM, DELETE_INVENTORYITEM } from '../types/inventoryitemTypes';

const initialState = {
    inventoryitems: [],
    inventoryitem: [],
    loading: false,
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_INVENTORYITEMS:
            return {
                ...state,
                inventoryitems: action.payload
            };
        case DELETE_INVENTORYITEM:
            return {
                ...state,
                inventoryitem: state.inventoryitems.filter(inventoryitem=> inventoryitem.id !== action.payload)
            };
        case ADD_INVENTORYITEM:
            return {
                ...state,
                inventoryitem: [...state.inventoryitem, action.payload]
            };
        case GET_INVENTORYITEM:
            return {
                ...state,
                inventoryitem: action.payload
            };
        default:
            return state;
    }
}
