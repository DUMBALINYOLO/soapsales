import { GET_EMPLOYEE_GENDER_CHOICES } from '../actions/types.js';

const initialState = {
   employeegenderchoices : [],
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_EMPLOYEE_GENDER_CHOICES:
            return {
                ...state,
                employeegenderchoices : action.payload
            };
        default:
            return state;
    }
}
