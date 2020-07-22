import React, { useEffect } from "react"
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {Button} from 'primereact/button';
import { connect } from 'react-redux';
import { getWarehouseitems } from '..//../actions/warehouseitems';
import {InputNumber} from 'primereact/inputnumber';


const Adjustments = (props) => {

  
  useEffect(() => {
        if(!props.fetched) {
            props.getWarehouseitems();
        }
        console.log('mount it!');
    }, []);

  const { warehouseitems } = props;

  console.log(warehouseitems)


  let warehouseItems = warehouseitems.length > 0
    && warehouseitems.map((item, i) => {
    return (
      <option key={i} value={item.id}>{item.item}</option>
    )
  }, this);

  return (
    props.adjustments.map((val, idx) => {
      let warehouse_item = `warehouse_item-${idx}`, adjustment = `adjustment-${idx}`, note = `note-${idx}`
      return (
        <tr key={val.index}>
          <td>
            <input
              type="number"
              name="adjustment" 
              data-id={idx} 
              id={adjustment} 
              className="form-control " 
            />
          </td>
          <td>
            <input
              type="text"
              name="note" 
              data-id={idx} 
              id={note} 
              className="form-control " 
            />
          </td>
          <td>
            <select 
              name="warehouse_item" 
              id={warehouse_item} 
              data-id={idx} 
              className="form-control"
            >
               {warehouseItems}
            </select>
          </td>

          <td>
            {
            idx===0?<Button onClick={()=>props.add()} type="button" icon='pi pi-plus' className="p-button-warning" />
            : <Button icon='pi pi-trash' className="p-button-danger" onClick={(() => props.delete(val))} />
            }
          </td>
        </tr >
      )
    })
  )
}


const mapStateToProps = state =>({
    warehouseitems: state.warehouseitems.warehouseitems
})

export default connect(mapStateToProps, {getWarehouseitems} ) (Adjustments);

