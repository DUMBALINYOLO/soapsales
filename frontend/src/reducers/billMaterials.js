import { GET_BILLMATERIALS, GET_BILLMATERIAL, DELETE_BILLMATERIAL, ADD_BILLMATERIAL  } from "../types/billmaterialTypes";

const initialState = {
    billmaterials: [],
    billmaterial: [],
    loading: false
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_BILLMATERIALS:
            return {
                ...state,
                billmaterials: action.payload
            };
        case DELETE_BILLMATERIAL:
            return {
                ...state,
                billmaterial: state.billmaterials.filter(billmaterial => billmaterial.id !== action.payload)
            };
        case ADD_BILLMATERIAL:
            return {
                ...state,
                billmaterials: [...state.billmaterials, action.payload]
            };
        case GET_BILLMATERIAL:
            return {
                ...state,
                billmaterial: action.payload
            };
        default:
            return state;
    }
}
