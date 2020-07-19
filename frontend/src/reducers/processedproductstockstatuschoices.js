import { GET_PROCESSED_PRODUCTS_STOCK_STATUS_CHOICES } from '../actions/types.js';

const initialState = {
   processedproductstockstatuschoices : [],
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_PROCESSED_PRODUCTS_STOCK_STATUS_CHOICES:
            return {
                ...state,
                processedproductstockstatuschoices : action.payload
            };
        default:
            return state;
    }
}