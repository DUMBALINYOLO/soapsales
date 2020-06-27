import { GET_ASSETS, DELETE_ASSET, ADD_ASSET  } from "../types/assetTypes";

const initialState = {
    assets: []
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_ASSETS:
            return {
                ...state,
                assets: action.payload
            };
        case DELETE_ASSET:
            return {
                ...state,
                asset   : state.assets.filter(asset => asset.id !== action.payload)
            };
        case ADD_ASSET:
            return {
                ...state,
                assets: [...state.asset, action.payload]
            }
        default:
            return state;
    }
}
