import { ADD_ACCOUNTINGCONFIG, GET_ACCOUNTINGCONFIG, GET_ACCOUNTCONFIG, DELETE_ACCOUNTINGCONFIG } from '../types/accountingconfigTypes';

const initialState = {
    accountingConfig: [],
    accountconfig: [],
    loading: false
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_ACCOUNTINGCONFIG:
            return {
                ...state,
                accountingConfig: action.payload
            };
        case DELETE_ACCOUNTINGCONFIG:
            return {
                ...state,
                accountingConfig: state.accountingConfig.filter(accountingConfig=> accountingConfig.id !== action.payload)
            };
        case ADD_ACCOUNTINGCONFIG:
            return {
                ...state,
                accountingConfig: [...state.accountingConfig, action.payload]
            };
        case GET_ACCOUNTCONFIG:
            return {
                ...state,
                accountconfig:action.payload
                };
        default:
            return state;

    }
}
