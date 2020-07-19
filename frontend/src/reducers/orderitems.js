import { GET_ORDER_ITEMS } from '../actions/types';

const initialState = {
    orderitems: [],

}


export default function(state = initialState, action){
    switch(action.type){
        case GET_ORDER_ITEMS:
            return {
                ...state,
                orderitems: action.payload
            };      
        default:
            return state;
    }
}
