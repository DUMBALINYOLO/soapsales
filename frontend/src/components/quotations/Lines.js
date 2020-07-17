import React, { useEffect } from "react"
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {Button} from 'primereact/button';
import { connect } from 'react-redux';
import { getProductlines} from '..//../actions/productlines';
import { getTaxes} from '..//../actions/taxes';
import {InputNumber} from 'primereact/inputnumber';


const QuotationLines = (props) => {
    useEffect(() => {
        if(!props.fetched) {
            props.getProductlines();
        }
        console.log('mount it!');
    }, []);

    const { productlines } = props;

    console.log(productlines)


    let productLine = productlines.length > 0
    && productlines.map((item, i) => {
    return (
      <option key={i} value={item.id}>{item.name}</option>
    )
    }, this);

    useEffect(() => {
        if(!props.fetched) {
            props.getTaxes();
        }
        console.log('mount it!');
    }, []);

    const { taxes } = props;

    console.log(taxes)


    let Taxes = taxes.length > 0
    && taxes.map((item, i) => {
    return (
      <option key={i} value={item.id}>{item.name}</option>
    )
    }, this);

  return (
    props.lines.map((val, idx) => {
      let discount = `discount-${idx}`, product = `product-${idx}`, tax = `tax-${idx}`
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
               {productLine}
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
    productlines: state.productlines.productlines,
    taxes: state.taxes.taxes
})

export default connect(mapStateToProps, { getProductlines, getTaxes } ) (QuotationLines);
