import { GET_MANUFACTURING_PRODUCT_TYPE_CHOICES } from '../actions/types.js';

const initialState = {
   manufacturingproducttypechoices : [],
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_MANUFACTURING_PRODUCT_TYPE_CHOICES:
            return {
                ...state,
                manufacturingproducttypechoices : action.payload
            };
        default:
            return state;
    }
}
