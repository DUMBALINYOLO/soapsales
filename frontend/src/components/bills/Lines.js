import React, { useEffect } from "react"
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {Button} from 'primereact/button';
import { connect } from 'react-redux';
import { getAccounts} from '..//../actions/accounts';
import {InputNumber} from 'primereact/inputnumber';

class Lines extends Component {
	constructor(props){
		super(props);
		this.state = {
		  accounts: null,
		  amount: '',
		  debit_account

		}
		this.onTypeChange = this.onTypeChange.bind(this);
		this.onChange = this.onChange.bind(this);
		this.addNewRow = this.addNewRow.bind(this);
		this.deleteRow = this.deleteRow.bind(this);
	}

	onTypeChange (e){
	  this.setState({accounts: e.value})
	} 
    
 //    addNewRow = (e) => {
	// 	this.setState((prevState) => ({
	// 	  lines: [...prevState.lines, { index: Math.random(), debit_account: "", amount: '' }],
	// 	}));
	// }

	// deleteRow = (index) => {
	// 	this.setState({
	// 	  lines: this.state.lines.filter((s, sindex) => index !== sindex),
	// 	});
	// }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    static propTypes = {
        getAccounts: PropTypes.func.isRequired,
    }

    componentDidMount() {
      this.props.getAccounts()
    }

    render() {
        const {
          accounts,
          number,
          debit_account
        } = this.state;
        
        const {accounts} = this.props;

        return (
        	<div className="card card-body mt-4 mb-4">
              <form key={this.id}>
                <div className="p-fluid p-formgrid p-grid">
                  <div className="p-field p-col-12 p-md-6">
                    <label>Amount</label>
                    <InputNumber
                      name="amount"
                      onChange={this.onChange}
                      value={amount}
                      showButtons
                      buttonLayout="horizontal"
                      decrementButtonClassName="p-button-danger"
                      incrementButtonClassName="p-button-success"
                      incrementButtonIcon="pi pi-plus"
                      decrementButtonIcon="pi pi-minus"
                      step={1}
                    />
                  </div>


                  <div className="p-field p-col-12 p-md-6">
                    <Dropdown 
                      placeholder ="SELECT ACCOUNTS"
                      value={debit_account}
                      onChange={this.onTypeChange}
                      options={accounts}
                      filter={true} 
                      filterBy="id,name" 
                      showClear={true}
                      optionLabel="name" 
                      optionValue="id"
                    />
                  </div>
                  <div className="p-field p-col-12 p-md-6">
                    <Button label="Submit" className="p-button-success p-button-rounded" />
                  </div>
                </div>
             </form>
         </div>
        );
    }
}


const mapStateToProps = state =>({
    accounts: state.accounts.accounts
})


export default connect(mapStateToProps, {getAccounts})(Lines);
