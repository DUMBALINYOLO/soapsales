import { ADD_PRICINGGROUP, GET_PRICINGGROUPS, GET_PRICINGGROUP, DELETE_PRICINGGROUP } from '../types/pricinggroupTypes';

const initialState = {
    pricinggroups: [],
    pricinggroup: [],
    loading: false
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
            };
        case GET_PRICINGGROUP:
            return {
                ...state,
                pricinggroup: action.payload
            };
        default:
            return state;
    }
}
