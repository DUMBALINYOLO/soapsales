import { GET_ACCOUNT_TYPE_CATEGORY_CHOICES } from '../actions/types.js';

const initialState = {
   categorychoices: [],
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_ACCOUNT_TYPE_CATEGORY_CHOICES:
            return {
                ...state,
                categorychoices: action.payload
            };
        default:
            return state;
    }
}
