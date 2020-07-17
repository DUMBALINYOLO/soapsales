import { GET_JOURNAL_ENTRY_TYPE_CHOICES } from '../actions/types.js';

const initialState = {
   journalentrytypechoices : [],
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_JOURNAL_ENTRY_TYPE_CHOICES:
            return {
                ...state,
                journalentrytypechoices : action.payload
            };
        default:
            return state;
    }
}
