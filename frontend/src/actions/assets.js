import axios from 'axios';
import { GET_ASSETS, DELETE_ASSET, ADD_ASSET } from '../types/assetTypes';
import { assetsURL } from '../constants';


// Get
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
export const addAsset = (asset) => dispatch => {
    axios.post(assetsURL, asset)
        .then(res => {
            dispatch({
                type: ADD_ASSET,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
