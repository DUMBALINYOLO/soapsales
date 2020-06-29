import axios from 'axios';
import { createMessage } from './messages';
import { 
        GET_TAXES, 
        DELETE_TAX, 
        ADD_TAX, GET_ERRORS 
    } from './types';


// Get Taxes
export const getTaxes = () => async dispatch => {
    const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    }
    const body = JSON.stringify

    axios.get('http://localhost:8000/api/accounting/taxes/')
        .then(res => {
            dispatch({
                type: GET_TAXES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete Taxes

export const deleteTax = (id) => dispatch => {
    axios.delete(`http://localhost:8000/api/accounting/taxes/${id}/`)
        .then(res => {
            dispatch(createMessage({ taxDeleted: 'Tax Deleted' }))
            dispatch({
                type: DELETE_TAX,
                payload: id
            });
        }).catch(err => console.log(err))
}


// Add Taxes
export const addTax = (tax) => dispatch => {
    axios.post('http://localhost:8000/api/accounting/taxes/', tax)
        .then(res => {
            dispatch({
                type: ADD_TAX,
                payload: res.data
            });
        }).catch(err =>{
            const errors = {
                msg: err.response.data,
                status: err.response.status

        }
        dispatch({
            type: GET_ERRORS,
            payload: errors
        });
    });
};
