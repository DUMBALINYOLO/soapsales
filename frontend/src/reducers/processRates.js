import { GET_PROCESSRATES, GET_PROCESSRATE, DELETE_PROCESSRATE, ADD_PROCESSRATE  } from "../types/processrateTypes";

const initialState = {
    processrates: [],
    processrate: [],
    loading: false
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_PROCESSRATES:
            return {
                ...state,
                processrates: action.payload
            };
        case DELETE_PROCESSRATE:
            return {
                ...state,
                processrate: state.processRates.filter(processRate => processRate.id !== action.payload)
            };
        case ADD_PROCESSRATE:
            return {
                ...state,
                processrates: [...state.processRates, action.payload]
            };
        case GET_PROCESSRATE:
            return {
                ...state,
                processrate: action.payload
            };
        default:
            return state;
    }
}
