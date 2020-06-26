import axios from 'axios';
import { GET_PRICINGGROUPS, DELETE_PRICINGGROUP, ADD_PRICINGGROUP } from '../types/pricinggroupTypes';
import { pricinggroupsURL } from '../constants';


// Get
export const getPricinggroups = () => dispatch => {
    axios.get(pricinggroupsURL)
        .then(res => {
            dispatch({
                type: GET_PRICINGGROUPS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deletePricinggroup = (id) => dispatch => {
    axios.delete(pricinggroupsURL, id)
        .then(res => {
            dispatch({
                type: DELETE_PRICINGGROUP,
                payload: id
            });
        }).catch(err => console.log(err))
}


// Add
export const addPricinggroup = (pricinggroup) => dispatch => {
    axios.post(pricinggroupsURL, pricinggroup)
        .then(res => {
            dispatch({
                type: ADD_PRICINGGROUP,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
