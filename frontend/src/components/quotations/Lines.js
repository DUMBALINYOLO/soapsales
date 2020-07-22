import React, { useEffect } from "react"
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {Button} from 'primereact/button';
import { connect } from 'react-redux';
import { getProductLineComponents } from '..//../actions/productlinecomponents';
import { getTaxes} from '..//../actions/taxes';
import { getInvoiceLineChoices } from '..//../actions/choices';
import {InputNumber} from 'primereact/inputnumber';


const QuotationLines = (props) => {

    useEffect(() => {
        if(!props.fetched) {
            props.getProductLineComponents();
            props.getTaxes();
            props.getInvoiceLineChoices();
        }
        console.log('mount it!');
    }, []);

    const { productlinecomponents } = props;
    const { taxes } = props;
    const { invoicelinechoices } = props;




    let productLines = productlinecomponents.length > 0
      && productlinecomponents.map((item, i) => {
      return (
        <option key={i} value={item.id}>{item.product}</option>
      )
      }, this);



    let Taxes = taxes.length > 0
    && taxes.map((item, i) => {
    return (
      <option key={i} value={item.id}>{item.name}</option>
    )
    }, this);

    let choices = invoicelinechoices.length > 0
    && invoicelinechoices.map((item, i) => {
    return (
      <option key={i} value={item.key}>{item.value}</option>
    )
    }, this);


  return (
    props.lines.map((val, idx) => {
      let discount = `discount-${idx}`, product = `product-${idx}`, tax = `tax-${idx}`,  line_type = `line_type-${idx}` 
      return (
        <tr key={val.index}>
          <td>
            <input
              type="number"
              name="discount"
              data-id={idx}
              id={discount}
              className="form-control "
            />
          </td>
          <td>
            <select
              name="product"
              id={product}
              data-id={idx}
              className="form-control"
            >
               {productLines}
            </select>
          </td>
          <td>
            <select
              name="tax"
              id={tax}
              data-id={idx}
              className="form-control"
            >
               {Taxes}
            </select>
          </td>
          <td>
            <select
              name="line_type"
              id={line_type}
              data-id={idx}
              className="form-control"
            >
               {choices}
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
    productlinecomponents: state.productlinecomponents.productlinecomponents,
    taxes: state.taxes.taxes,
    invoicelinechoices: state.invoicelinechoices.invoicelinechoices,
})

export default connect(mapStateToProps, { getProductLineComponents, getTaxes,  getInvoiceLineChoices } ) (QuotationLines);
