import { 
    GET_PRODUCT_LINE_COMPONENTS,
    DELETE_PRODUCT_LINE_COMPONENT,
    GET_PRODUCT_LINE_COMPONENT,
    ADD_PRODUCT_LINE_COMPONENT, 
} from '../actions/types.js';

const initialState = {
    productlinecomponents: [],
    productlinecomponent: [],
    loading: false
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_PRODUCT_LINE_COMPONENTS:
            return {
                ...state,
                productlinecomponents: action.payload
            };
        case DELETE_PRODUCT_LINE_COMPONENT:
            return {
                ...state,
                productlinecomponent: state.productlinecomponents.filter(productlinecomponent => productlinecomponent.id !== action.payload)
            };
        case ADD_PRODUCT_LINE_COMPONENT:
            return {
                ...state,
                productlinecomponents: [...state.productlinecomponents, action.payload]
            };
        case GET_PRODUCT_LINE_COMPONENT:
            return {
                ...state,
                productlinecomponent: action.payload
            };
        default:
            return state;
    }
}
