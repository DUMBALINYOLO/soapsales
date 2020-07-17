import { GET_INVENTORY_TYPE_CHOICES } from '../actions/types.js';

const initialState = {
   inventorytypechoices : [],
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_INVENTORY_TYPE_CHOICES:
            return {
                ...state,
                inventorytypechoices : action.payload
            };
        default:
            return state;
    }
}
