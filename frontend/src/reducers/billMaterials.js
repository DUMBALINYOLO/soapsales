import { GET_BILLMATERIALS, GET_BILLMATERIAL, DELETE_BILLMATERIAL, ADD_BILLMATERIAL  } from "../types/billmaterialTypes";

const initialState = {
    billMaterials: [],
    billmaterial: [],
    loading: false
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_BILLMATERIALS:
            return {
                ...state,
                billMaterials: action.payload
            };
        case DELETE_BILLMATERIAL:
            return {
                ...state,
                billMaterial: state.billMaterials.filter(billMaterial => billMaterial.id !== action.payload)
            };
        case ADD_BILLMATERIAL:
            return {
                ...state,
                billMaterials: [...state.billMaterials, action.payload]
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
