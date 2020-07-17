import { GET_ASSET_DEPRECIATION_METHOD_CHOICES } from '../actions/types.js';

const initialState = {
   assetsdepreciationmethodchoices : [],
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_ASSET_DEPRECIATION_METHOD_CHOICES:
            return {
                ...state,
                assetsdepreciationmethodchoices : action.payload
            };
        default:
            return state;
    }
}
