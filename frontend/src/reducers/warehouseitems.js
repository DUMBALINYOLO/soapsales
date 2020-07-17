import { GET_WAREHOUSE_ITEMS, GET_WAREHOUSE_ITEM, DELETE_WAREHOUSE_ITEM, ADD_WAREHOUSE_ITEM  } from '../types/warehouseitemTypes';

const initialState = {
    warehouseitems: [],
    warehouseitem: [],
    loading: false
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_WAREHOUSE_ITEMS:
            return {
                ...state,
                warehouseitems: action.payload
            };
        case DELETE_WAREHOUSE_ITEM:
            return {
                ...state,
                warehouseitem: state.warehouseitems.filter(warehouseitem => warehouseitem.id !== action.payload)
            };
        case ADD_WAREHOUSE_ITEM:
            return {
                ...state,
                warehouseitem: [...state.warehouseitems, action.payload]
            };
        case GET_WAREHOUSE_ITEM:
            return {
                ...state,
                warehouseitem: action.payload
            };
        default:
            return state;
    }
}
