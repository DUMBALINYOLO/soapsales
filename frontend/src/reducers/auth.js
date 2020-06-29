import { 
	USER_LOADING, 
	USER_LOADED , 
	AUTH_ERROR, 
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
} from '../types/privateTypes';



const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: false,
    user: null
};

export default function(state = initialState, action) {

    switch(action.type) {
    	case USER_LOADING:
    		  return {
    		  	...state,
    		  	loading: true
    		  }
    	case USER_LOADED:
    		  return {
    		  	...state,
    		  	isAuthenticated: true,
    		  	loading: false,
    		  	user: action.payload
    		  }
        case LOGIN_SUCCESS:
            localStorage.setItem("token", action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false
            }            

    	case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
    		  localStorage.removeItem('token')
    		  return {
    		  	...state,
    		  	token: null,
    		  	user: null,
    		  	isAuthenticated: false,
    		  	loading: false
    		  }
        default:
            return state

    }
}
