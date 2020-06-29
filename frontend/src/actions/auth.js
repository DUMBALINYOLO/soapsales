import axios from 'axios';
import { returnErrors } from './messages';
import { 
	USER_LOADING, 
	USER_LOADED , 
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL
} from '../types/privateTypes';


export const loadUser = () => (dispatch, getState) =>{
	//User Loading
	dispatch({ type: USER_LOADING });

	// Get Toke from State
	const token = getState().auth.token;

	//headers 
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	}
	//if token, add to headers config

	if(token){
		config.headers['Authorization'] = `Token ${token}`;
	}

	axios.get('http://localhost:8000/api/employees/auth/user', config)
		.then(res =>{
			dispatch({
				type: USER_LOADED,
				payload: res.data
			});
		}).catch(err =>{
			dispatch(returnErrors(err.response.data, err.response.status));
			dispatch({
				type: AUTH_ERROR
			});
		});
}


export const login = (username, password) => dispatch =>{

	//headers 
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	}

	//Request Body

	const body = JSON.stringify({
		username, password
	});

	axios.post('http://localhost:8000/api/employees/auth/login', body, config)
		.then(res =>{
			dispatch({
				type: LOGIN_SUCCESS,
				payload: res.data
			});
		}).catch(err =>{
			dispatch(returnErrors(err.response.data, err.response.status));
			dispatch({
				type: LOGIN_FAIL
			});
		});
}



