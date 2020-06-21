import { ADD_PRICINGGROUP, GET_PRICINGGROUPS , DELETE_PRICINGGROUP } from '../actions/types.js';

const initialState = {
    pricinggroups: []
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_PRICINGGROUPS:
            return {
                ...state,
                pricinggroups: action.payload
            };
        case DELETE_PRICINGGROUP:
            return {
                ...state,
                pricinggroup: state.pricinggroups.filter(pricinggroup=> pricinggroup.id !== action.payload)
            };
        case ADD_PRICINGGROUP:
            return {
                ...state,
                pricinggroup: [...state.pricinggroups, action.payload]
            }
        default:
            return state;
    }
}
