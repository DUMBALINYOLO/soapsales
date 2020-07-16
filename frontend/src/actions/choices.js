import axios from 'axios';
import {
    GET_ACCOUNT_TYPE_CATEGORY_CHOICES,
    GET_ACCOUNT_TYPE_CLASSIFICATION_CHOICES,

} from './types';
import { 
	accountTypesCategoryChoicesURL,
	accountTypesClassificationChoicesURL,
} from '../constants';


export const getAccountTypesCategoryChoices = () => dispatch => {
    axios.get('http://127.0.0.1:8000/api/config/account-types-category-choices/')
        .then(res => {
            dispatch({
                type: GET_ACCOUNT_TYPE_CATEGORY_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}



export const getAccountTypesClassificationChoices = () => dispatch => {
    axios.get('http://127.0.0.1:8000/api/config/account-types-classification-choices/')
        .then(res => {
            dispatch({
                type: GET_ACCOUNT_TYPE_CLASSIFICATION_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
