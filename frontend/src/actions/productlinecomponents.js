import axios from 'axios';
import {
    GET_PRODUCT_LINE_COMPONENTS,
    DELETE_PRODUCT_LINE_COMPONENT,
    GET_PRODUCT_LINE_COMPONENT,
    ADD_PRODUCT_LINE_COMPONENT,
    UPDATE_PRODUCT_LINE_COMPONENTS

} from './types';




import { productLineComponentURL } from '../constants';
import { tokenConfig } from "./auth";
import {createMessage} from "./messages";
import {GET_ERRORS} from "./types"
// Get
// export const getAccounts = () =>(dispatch, getState)=> {
//     axios.get(accountsURL, tokenConfig(getState))
//         .then(res => {
//             dispatch({
//                 type: GET_ACCOUNTS ,
//                 payload: res.data
//             });
//         }).catch(err => console.log(err))

// }


export const getProductLineComponents = () => dispatch => {
    axios.get(productLineComponentURL)
        .then(res => {
            dispatch({
                type: GET_PRODUCT_LINE_COMPONENTS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


//Delete


export const deleteProductLineComponent = (id) => dispatch => {
    axios.delete(productLineComponentURL, id)
        .then(res => {
            dispatch({
                type: DELETE_PRODUCT_LINE_COMPONENT,
                payload: id
            });
        }).catch(err => console.log(err))
}



// Add
// Get


export const addProductLineComponent = (productlinecomponent) => dispatch => {
    const config= {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    axios.post(productLineComponentURL, productlinecomponent, config)
        .then(res => {
            dispatch({
                type: ADD_PRODUCT_LINE_COMPONENT,
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
}


export const getProductLineComponent = id => dispatch =>{
      axios.get(`http://127.0.0.1:8000/api/sales/productlinecomponents/${id}`)
        .then(res => {
            dispatch({
                type: GET_PRODUCT_LINE_COMPONENT,
                payload: res.data
            });
        }).catch(err => console.log(err))

}
