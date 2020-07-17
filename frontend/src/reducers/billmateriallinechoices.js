import { GET_BILL_OF_MATERIAL_LINE_CHOICES } from '../actions/types.js';

const initialState = {
   billmateriallinechoices : [],
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_BILL_OF_MATERIAL_LINE_CHOICES:
            return {
                ...state,
                billmateriallinechoices : action.payload
            };
        default:
            return state;
    }
}
