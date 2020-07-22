import React, { useEffect } from "react"
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {Button} from 'primereact/button';
import { connect } from 'react-redux';
import { getBillOfMaterialLineChoices } from '..//../actions/choices';
import { getUnitmeasures } from '..//../actions/unitmeasure';
import { getInventoryitems } from '..//../actions/inventoryitems';
import { getProcessproducts } from '..//../actions/processproducts';
import {InputNumber} from 'primereact/inputnumber';


const BillOfMaterialLines = (props) => {

  
  useEffect(() => {
        if(!props.fetched) {
            props.getBillOfMaterialLineChoices();
            props.getUnitmeasures();
            props.getInventoryitems();
            props.getProcessproducts();
        }
        console.log('mount it!');
    }, []);

  const { inventoryitems } = props;
  const { processproducts } = props;
  const { unitmeasures } = props;
  const { billmateriallinechoices } = props;

  


  let inventoryItems = inventoryitems.length > 0
    && inventoryitems.map((item, i) => {
    return (
      <option key={i} value={item.id}>{item.name}</option>
    )
  }, this);


  let unitOfMeasures = unitmeasures.length > 0
    && unitmeasures.map((item, i) => {
    return (
      <option key={i} value={item.id}>{item.name}</option>
    )
  }, this);


  let processProducts = processproducts.length > 0
    && processproducts.map((item, i) => {
    return (
      <option key={i} value={item.id}>{item.name}</option>
    )
  }, this);


  let choices = billmateriallinechoices.length > 0
    && billmateriallinechoices.map((item, i) => {
    return (
      <option key={i} value={item.key}>{item.value}</option>
    )
  }, this);




  return (
    props.lines.map((val, idx) => {
      let type = `type-${idx}`, quantity = `quantity-${idx}`, raw_material = `raw_material-${idx}`, product = `product-${idx}`, unit = `unit-${idx}`
      return (
        <tr key={val.index}>
          <td>
            <input
              type="number"
              name="quantity" 
              data-id={idx} 
              id={quantity} 
              className="form-control " 
            />
          </td>
          <td>
            <select 
              name="type" 
              id={type} 
              data-id={idx} 
              className="form-control"
            >
               {choices}
            </select>
          </td>
          <td>
            <select 
              name="raw_material" 
              id={raw_material} 
              data-id={idx} 
              className="form-control"
            >
               {inventoryItems}
            </select>
          </td>
          <td>
            <select 
              name="product" 
              id={product} 
              data-id={idx} 
              className="form-control"
            >
               {processProducts}
            </select>
          </td>
          <td>
            <select 
              name="unit" 
              id={unit} 
              data-id={idx} 
              className="form-control"
            >
               {unitOfMeasures}
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
    billmateriallinechoices: state.billmateriallinechoices.billmateriallinechoices,
    unitmeasures: state.unitmeasures.unitmeasures,
    processproducts: state.processproducts.processproducts,
    inventoryitems: state.inventoryitems.inventoryitems
})

export default connect(
    mapStateToProps, 
    {getBillOfMaterialLineChoices, getInventoryitems, getUnitmeasures, getProcessproducts } 
    ) 
    (BillOfMaterialLines);