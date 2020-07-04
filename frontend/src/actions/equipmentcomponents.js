import axios from 'axios';
import { ADD_EQUIPMENTCOMPONENT, GET_EQUIPMENTCOMPONENTS, GET_EQUIPMENTCOMPONENT, DELETE_EQUIPMENTCOMPONENT } from '../types/equipmentcomponentTypes';
import { equipmentcomponentURL } from '../constants';


// Get
export const getEquipmentComponents = () => dispatch => {
    axios.get(equipmentcomponentURL)
        .then(res => {
            dispatch({
                type: GET_EQUIPMENTCOMPONENTS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteEquipmentcomponent = (id) => dispatch => {
    axios.delete(equipmentcomponentURL, id)
        .then(res => {
            dispatch({
                type: DELETE_EQUIPMENTCOMPONENT,
                payload: id
            });
        }).catch(err => console.log(err))
}


// Add
// Get
export const addEquipmentcomponent = equipmentcomponent => dispatch => {
    axios.post(equipmentcomponentURL, equipmentcomponent)
        .then(res => {
            dispatch({
                type: ADD_EQUIPMENTCOMPONENT,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getEquipmentComponent = id => dispatch =>{
      axios.get(`http://127.0.0.1:8000/api/inventory/equipment-components/${id}`)
        .then(res => {
            dispatch({
                type: GET_EQUIPMENTCOMPONENT,
                payload: res.data
            });
        }).catch(err => console.log(err))

}
