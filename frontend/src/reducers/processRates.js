import { GET_PROCESSRATES, DELETE_PROCESSRATE, ADD_PROCESSRATE  } from "../types/processrateTypes";

const initialState = {
    processRates: []
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_PROCESSRATES:
            return {
                ...state,
                processRates: action.payload
            };
        case DELETE_PROCESSRATE:
            return {
                ...state,
                processRate: state.processRates.filter(processRate => processRate.id !== action.payload)
            };
        case ADD_PROCESSRATE:
            return {
                ...state,
                processRates: [...state.processRates, action.payload]
            }
        default:
            return state;
    }
}
