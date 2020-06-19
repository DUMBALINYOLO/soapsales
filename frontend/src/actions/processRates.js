import axios from 'axios';
import { GET_PROCESSRATES, DELETE_PROCESSRATE, ADD_PROCESSRATE } from './types';


// Get
export const getProcessRates = () => dispatch => {
    axios.get('http://localhost:8000/api/manufacture/process-rates/')
        .then(res => {
            dispatch({
                type: GET_PROCESSRATES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteProcessRate = (id) => dispatch => {
    axios.delete(`http://localhost:8000/api/manufacture/process-rates/${id}/`)
        .then(res => {
            dispatch({
                type: DELETE_PROCESSRATE,
                payload: id
            });
        }).catch(err => console.log(err))
}


// Add
export const addProcessRate = (processRate) => dispatch => {
    axios.post('http://localhost:8000/api/manufacture/process-rates/', processRate)
        .then(res => {
            dispatch({
                type: ADD_PROCESSRATE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
