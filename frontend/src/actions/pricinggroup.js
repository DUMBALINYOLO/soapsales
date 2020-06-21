import axios from 'axios';
import { GET_PRICINGGROUPS, DELETE_PRICINGGROUP, ADD_PRICINGGROUP } from './types';


// Get
export const getPricinggroups = () => dispatch => {
    axios.get('http://localhost:8000/api/stock/pricing-groups/')
        .then(res => {
            dispatch({
                type: GET_PRICINGGROUPS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deletePricinggroup = (id) => dispatch => {
    axios.delete(`http://localhost:8000/api/stock/pricing-groups/${id}/`)
        .then(res => {
            dispatch({
                type: DELETE_PRICINGGROUP,
                payload: id
            });
        }).catch(err => console.log(err))
}


// Add
export const addPricinggroup = (pricinggroup) => dispatch => {
    axios.post('http://localhost:8000/api/stock/pricing-groups/', pricinggroup)
        .then(res => {
            dispatch({
                type: ADD_PRICINGGROUP,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
