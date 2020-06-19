import { GET_BILLMATERIALS, DELETE_BILLMATERIAL, ADD_BILLMATERIAL  } from "../actions/types.js";

const initialState = {
    billMaterials: []
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
            }
        default:
            return state;
    }
}
