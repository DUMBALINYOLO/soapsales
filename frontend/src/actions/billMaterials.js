import axios from 'axios';
import { GET_BILLMATERIALS, DELETE_BILLMATERIAL, ADD_BILLMATERIAL } from './types';


// Get
export const getBillMaterials = () => dispatch => {
    axios.get('http://localhost:8000/api/manufacture/bills-of-materials-line/')
        .then(res => {
            dispatch({
                type: GET_BILLMATERIALS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteBillMaterial = (id) => dispatch => {
    axios.delete(`http://localhost:8000/api/manufacture/bills-of-materials-line/${id}/`)
        .then(res => {
            dispatch({
                type: DELETE_BILLMATERIAL,
                payload: id
            });
        }).catch(err => console.log(err))
}


// Add
export const addBillMaterial = (billMaterial) => dispatch => {
    axios.post('http://localhost:8000/api/manufacture/bills-of-materials-line/', billMaterial)
        .then(res => {
            dispatch({
                type: ADD_BILLMATERIAL,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
