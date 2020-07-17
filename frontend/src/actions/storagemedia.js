import axios from 'axios';
import { ADD_STORAGEMEDIA, GET_STORAGEMEDIAS, GET_STORAGEMEDIA, DELETE_STORAGEMEDIA } from '../types/storagemediaTypes';
import { storagemediaURL } from '../constants';


// Get
export const getStoragemedias = () => dispatch =>{
    axios.get(storagemediaURL)
        .then(res => {
            dispatch({
                type: GET_STORAGEMEDIAS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteStoragemedia = (id) => dispatch => {
    axios.delete(storagemediaURL, id)
        .then(res => {
            dispatch({
                type: DELETE_STORAGEMEDIA,
                payload: id
            });
        }).catch(err => console.log(err))
}


// Add
// Get
export const addStoragemedia = storagemedia => dispatch => {
    axios.post(storagemediaURL, storagemedia)
        .then(res => {
            dispatch({
                type: ADD_STORAGEMEDIA,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getStoragemedia = id => dispatch =>{
      axios.get(`http://127.0.0.1:8000/api/inventory/storagemedia/${id}`)
        .then(res => {
            dispatch({
                type: GET_STORAGEMEDIA,
                payload: res.data
            });
        }).catch(err => console.log(err))

}
