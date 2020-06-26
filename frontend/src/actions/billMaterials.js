import axios from 'axios';
import { GET_BILLMATERIALS, DELETE_BILLMATERIAL, ADD_BILLMATERIAL } from '../types/billmaterialTypes';
import { billmaterialURL } from '../constants';


// Get
export const getBillMaterials = () => dispatch => {
    axios.get(billmaterialURL)
        .then(res => {
            dispatch({
                type: GET_BILLMATERIALS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteBillMaterial = (id) => dispatch => {
    axios.delete(billmaterialURL, id)
        .then(res => {
            dispatch({
                type: DELETE_BILLMATERIAL,
                payload: id
            });
        }).catch(err => console.log(err))
}


// Add
export const addBillMaterial = (billMaterial) => dispatch => {
    axios.post(billmaterialURL, billMaterial)
        .then(res => {
            dispatch({
                type: ADD_BILLMATERIAL,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
