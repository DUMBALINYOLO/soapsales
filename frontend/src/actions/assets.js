import axios from 'axios';
import { GET_ASSETS, GET_ASSET, DELETE_ASSET, ADD_ASSET } from '../types/assetTypes';
import { assetsURL } from '../constants';
import { tokenConfig } from './auth';


// Get
export const getAssets = () => (dispatch, getState)=> {
    axios.get(assetsURL, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_ASSETS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteAsset = (id) => (dispatch, getState) => {
    axios.delete(assetsURL, id, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: DELETE_ASSET,
                payload: id
            });
        }).catch(err => console.log(err))
}


// Add
export const addAsset = (asset) => (dispatch, getState) => {
    axios.post(assetsURL, asset, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: ADD_ASSET,
                payload: res.data
            });
        }).catch(err => console.log(err))
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
