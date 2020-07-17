import axios from 'axios';
import { ADD_WAREHOUSE_ITEM, GET_WAREHOUSE_ITEMS, GET_WAREHOUSE_ITEM, DELETE_WAREHOUSE_ITEM } from '../types/warehouseitemTypes';
import { warehouseitemURL } from '../constants';


// Get
export const getWarehouseitems = () => dispatch =>{
    axios.get(warehouseitemURL)
        .then(res => {
            dispatch({
                type: GET_WAREHOUSES_ITEMS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteWarehouseitem = (id) => dispatch => {
    axios.delete(warehouseitemURL, id)
        .then(res => {
            dispatch({
                type: DELETE_WAREHOUSE_ITEM,
                payload: id
            });
        }).catch(err => console.log(err))
}


// Add
// Get
export const addWarehouseitem = warehouseitem => dispatch => {
    axios.post(warehousitemURL, warehouseitem)
        .then(res => {
            dispatch({
                type: ADD_WAREHOUSE_ITEM,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getWarehouseitem = id => dispatch =>{
      axios.get(`http://127.0.0.1:8000/api/inventory/warehouseitems/${id}`)
        .then(res => {
            dispatch({
                type: GET_WAREHOUSE_ITEM,
                payload: res.data
            });
        }).catch(err => console.log(err))

}
