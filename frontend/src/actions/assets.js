import axios from 'axios';
import { GET_ASSETS, GET_ASSET, DELETE_ASSET, ADD_ASSET } from '../types/assetTypes';
import { assetsURL } from '../constants';
import { tokenConfig } from './auth';
import {createMessage} from "./messages";
import {GET_ERRORS} from "./types"




export const getAssets = () => dispatch => {
    axios.get(assetsURL)
        .then(res => {
            dispatch({
                type: GET_ASSETS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


//Delete


export const deleteAsset = (id) => dispatch => {
    axios.delete(assetsURL, id)
        .then(res => {
            dispatch({
                type: DELETE_ASSET,
                payload: id
            });
        }).catch(err => console.log(err))
}



// Add
// Get


export const addAsset = (asset) => dispatch => {
    const config= {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    axios.post(assetsURL, asset, config)
        .then(res => {
            dispatch({
                type: ADD_ASSET,
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


export const getAsset = id => dispatch =>{
      axios.get(`http://127.0.0.1:8000/api/accounting/assets/${id}`)
        .then(res => {
            dispatch({
                type: GET_ASSET,
                payload: res.data
            });
        }).catch(err => console.log(err))

}