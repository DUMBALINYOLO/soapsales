import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCurrency, getCurrency } from '..//../actions/currencies';
import PropTypes from 'prop-types';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';

export class UpdateCurrency extends Component{
  constructor(props){
    super(props);
    this.state = {
        name: '',
        symbol: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }



  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getCurrency(id);
  }

  // UNSAFE_componentWillReceiveProps(nextProps, nextState) {
  //       const { name, symbol} = nextProps.currency;
  //       this.setState({
  //           name,
  //           symbol
  //       })
  //    }





  componentDidUpdate(nextProps) {
    const { currency } =  nextProps;

    if(currency){

      this.setState({
        id: currency.id,
        name: currency.name,
        symbol: currency.symbol,  
      });
    }
  }


  onChange(e) {
    const target = e.target;
    const value =target.value;
    const name = target.name;
    this.setState({
      [name]: value

    });

  }

  onSubmit = (e) => {
    e.preventDefault();
    const { name, symbol, } = this.state;
    const { id } = this.props.match.params;
    const currency = { id, name, symbol};
    console.log(currency)
    this.props.updateCurrency(this.props.match.params, currency);
    // this.props.history.push('/currencies');

  };





  static propTypes = {
      updateCurrency: PropTypes.func.isRequired,
  }



    render() {
        const { name, symbol } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Update Currency</h2>
              <form onSubmit={this.onSubmit}>
                <div className="p-fluid p-formgrid p-grid">
                  <div className="p-field p-col-12 p-md-6">
                    <label>Name</label>
                    <InputText
                      className="form-control"
                      type="text"
                      name="name"
                      onChange={this.onChange}
                      value={name}
                    />
                  </div>
                  <div className="p-field p-col-12 p-md-6">
                    <label>Symbol</label>
                    <InputText
                      className="form-control"
                      type="text"
                      name="symbol"
                      onChange={this.onChange}
                      value={symbol}
                    />
                  </div>
                  <div className="p-field p-col-12 p-md-12">
                    <Button label="Submit" className="p-button-success p-button-rounded" />
                  </div>
                </div>
             </form>
         </div>
        );
    }
}


const mapStateToProps = state => ({
    currency: state.currencies.currency
})


export default connect(mapStateToProps, { getCurrency, updateCurrency })(UpdateCurrency);
