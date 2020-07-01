import React, {Component, Fragment} from 'react';
import {HashRouter as Router} from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './App.css';
import Home from './components/Home/Home';
import Default from './components/Home/Default';

import Alerts from './components/alerts/Alert';
import Content from "./dashboard/Content";
// import Taxes from './components/taxes/Taxes';
// import TaxForm from './components/taxes/TaxForm';
import Currencies from './components/currencies/Currencies';
import CurrencyForm from './components/currencies/CurrencyForm';

import Bookkeepers from './components/bookkeepers/Bookkeepers';
import BookkeeperForm from './components/bookkeepers/BookkeeperForm';

import AccountTypes from './components/accounttypes/AccountTypes';
import AccountTypeForm from './components/accounttypes/AccountTypeForm';

import Form from './components/accounts/Form';


import Orders from './components/orders/Orders';
import OrderForm from './components/orders/OrderForm';

import Invoice from './components/invoices/Invoices';
import InvoiceForm from './components/invoices/InvoiceForm';


import Salesrep from './components/salesreps/Salesrep';
import SalesrepForm from './components/salesreps/SalesrepForm';

import Customers from './components/customers/Customers';
import CustomerForm from './components/customers/CustomerForm';

import Pricinggroup from './components/pricinggroups/Pricinggroup';
import PricinggroupForm from './components/pricinggroups/PricinggroupForm';

import Unitmeasure from './components/unitmeasure/Unitmeasure';
import UnitmeasureForm from './components/unitmeasure/UnitmeasureForm';

import Orderpayments from './components/orderpayments/Orderpayments';
import OrderpaymentForm from './components/orderpayments/OrderpaymentForm';

import Payments from './components/payments/Payments';
import PaymentForm from './components/payments/PaymentForm';

import Debitnotes from './components/debitnotes/Debitnotes';
import DebitnotesForm from './components/debitnotes/DebitnoteForm';

import Creditnotes from './components/creditnotes/Creditnotes';
import CreditnotesForm from './components/creditnotes/CreditnoteForm';


import AccountingConfig from './components/accountingConfig/AccountingConfig';
import AccountingConfigForm from './components/accountingConfig/AccountingConfigForm';

import Accounts from './components/accounts/Accounts';
import AccountForm from './components/accounts/AccountForm';

import Products from "./components/Products/products";
import ProductForm from './components/Products/productForm';
import ProductDetails from "./components/Products/details";


import Productline from "./components/productline/Productline";
import ProductlineForm from './components/productline/ProductlineForm';

import ProcessMachines from "./components/machines/processMachines";

import ProcessGroups from "./components/machinegroup/processGroups";
import ProcessGroupForm from './components/machinegroup/processGroupForm';

import BillMaterials from "./components/materialline/billMaterials";


import WasteReports from "./components/wastes/wasteReports";
import WasteReportForm from './components/wastes/wasteForm';

import ProcessRates from "./components/processrate/processRates";
import ProcessRateForm from './components/processrate/processRateForm';
import { loadUser } from "./actions/auth";
import Process from "./components/Process/process";
import ProcessForm from './components/Process/processForm';

import Assets from "./components/assets/Assets";
import AssetForm from './components/assets/AssetForm';

import Transactions from "./components/transactions/Transactions";

import Inventorycontroller from './components/inventorycontrollers/Inventorycontroller';
import InventorycontrollerForm from './components/inventorycontrollers/InventorycontrollerForm';

import Inventorycategory from './components/inventorycategory/Inventorycategory';
import InventorycategoryForm from './components/inventorycategory/InventorycategoryForm';

import Processproduct from "./components/processedproducts/Processedproduct";
import ProcessproductForm from './components/processedproducts/ProcessedproductForm';
import Mali from './components/table/Mali';
import Thebuli from './components/table/Thebuli';
import MainTab from './components/configurations/MainConfig';
// import Sidebar from "./components/sidebar/Sidebar";
import Register from "./components/employees/Register";
import Login from "./components/employees/Login";
import PrivateRoute from "./components/common/PrivateRoute";

import Journals from "./components/journals/Journals";
import BillPayments from "./components/billpayment/Billpayments";
import Inventoryitems from "./components/inventoryitem/Inventoryitems";
import Productionorders from "./components/productionorder/Productionorders";
import Processproducts from "./components/processproduct/Processproduct";

//Alert Options
const alertOptions = {
	timeout: 3000,
	position: 'top center'
}

class App extends Component {
	componentDidMount(){
		store.dispatch(loadUser());
	}


	render(){
		return (
			<Provider store={store}>
				<AlertProvider template={AlertTemplate} {...alertOptions} >
					<Fragment>
						< Home />
						< Alerts />
						<Switch>
							<Route exact path='/' component={Home} />
							<PrivateRoute exact path='/dashboard' component={Content} />
							<PrivateRoute exact path='/products' component={Products} />
							<PrivateRoute exact path='/productsForm' component={ProductForm} />
							<PrivateRoute exact path='/productdetails' component={ProductDetails} />
							<PrivateRoute exact path='/processMachines' component={ProcessMachines} />
							<PrivateRoute exact path='/processGroups' component={ProcessGroups} />
							<PrivateRoute exact path='/processGroupForm' component={ProcessGroupForm} />
							<PrivateRoute exact path='/billmaterials' component={BillMaterials} />
							<PrivateRoute exact path='/billpayments' component={BillPayments} />
							<PrivateRoute exact path='/mali' component={Mali} />
							<Route exact path='/table' component={Thebuli} />
							<PrivateRoute exact path='/journals' component={Journals} />
							<PrivateRoute exact path='/tab' component={MainTab} />
							<PrivateRoute exact path='/waste' component={WasteReports} />
							<PrivateRoute exact path='/waste-report' component={WasteReportForm} />
							<PrivateRoute exact path='/process-rate' component={ProcessRates} />
							<PrivateRoute exact path='/process-rate-form' component={ProcessRateForm} />
							<PrivateRoute exact path='/process' component={Process} />
							<PrivateRoute exact path='/process-form' component={ProcessForm} />
							<PrivateRoute exact path='/assets' component={Assets} />
							<PrivateRoute exact path='/asset-form' component={AssetForm} />
							<PrivateRoute exact path='/processproducts' component={Processproduct} />
							<PrivateRoute exact path='/processproduct-form' component={ProcessproductForm} />
							<PrivateRoute exact path='/products' component={Products} />
							<PrivateRoute exact path='/productionorders' component={Productionorders} />
							<PrivateRoute exact path='/productsForm' component={ProductForm} />
							<PrivateRoute exact path='/processmachines' component={ProcessMachines} />
							<PrivateRoute exact path='/processgroups' component={ProcessGroups} />
							<PrivateRoute exact path='/processGroupForm' component={ProcessGroupForm} />
							<PrivateRoute exact path='/waste' component={WasteReports} />
							<PrivateRoute exact path='/waste-report' component={WasteReportForm} />
							<PrivateRoute exact path='/processrates' component={ProcessRates} />
							<PrivateRoute exact path='/process-rate-form' component={ProcessRateForm} />
							<PrivateRoute exact path='/process' component={Process} />
							<PrivateRoute exact path='/process-form' component={ProcessForm} />
							<PrivateRoute exact path='/assets' component={Assets} />
							<PrivateRoute exact path='/asset-form' component={AssetForm} />
							<PrivateRoute exact path='/transactions' component={Transactions} />
							<PrivateRoute exact path='/currencies' component={Currencies} />
							<PrivateRoute exact path='/currency-form' component={CurrencyForm} />
							<PrivateRoute exact path='/bookkeepers' component={Bookkeepers} />
							<PrivateRoute exact path='/bookkeeper-form' component={BookkeeperForm} />
							<PrivateRoute exact path='/accounttypes' component={AccountTypes} />
							<PrivateRoute exact path='/accounttype-form' component={AccountTypeForm} />
							<PrivateRoute exact path='/accounts' component={Accounts} />
							<PrivateRoute exact path='/account-form' component={AccountForm} />
							<PrivateRoute exact path='/accountingConfig' component={AccountingConfig} />
							<PrivateRoute exact path='/accountingConfig-form' component={AccountingConfigForm} />
							<PrivateRoute exact path='/debitnotes' component={Debitnotes} />
							<PrivateRoute exact path='/debitnote-form' component={DebitnotesForm} />
							<PrivateRoute exact path='/creditnotes' component={Creditnotes} />
							<PrivateRoute exact path='/creditnote-form' component={CreditnotesForm} />
							<PrivateRoute exact path='/orders' component={Orders} />
							<PrivateRoute exact path='/order-form' component={OrderForm} />
							<PrivateRoute exact path='/orderpayments' component={Orderpayments} />
							<PrivateRoute exact path='/orderpayment-form' component={OrderpaymentForm} />
							<PrivateRoute exact path='/inventorycontrollers' component={Inventorycontroller} />
							<PrivateRoute exact path='/inventorycontroller-form' component={InventorycontrollerForm} />
							<PrivateRoute exact path='/unitmeasure' component={Unitmeasure} />
							<PrivateRoute exact path='/unitmeasure-form' component={UnitmeasureForm} />
							<PrivateRoute exact path='/inventorycategory' component={Inventorycategory} />
							<PrivateRoute exact path='/inventoryitems' component={Inventoryitems} />
							<PrivateRoute exact path='/inventorycategory-form' component={InventorycategoryForm} />
							<PrivateRoute exact path='/pricinggroups' component={Pricinggroup} />
							<PrivateRoute exact path='/pricinggroup-form' component={PricinggroupForm} />
							<PrivateRoute exact path='/customers' component={Customers} />
							<PrivateRoute exact path='/customer-form' component={CustomerForm} />
							<PrivateRoute exact path='/payments' component={Payments} />
							<PrivateRoute exact path='/payment-form' component={PaymentForm} />
							<PrivateRoute exact path='/sales-rep' component={Salesrep} />
							<PrivateRoute exact path='/salesrep-form' component={SalesrepForm} />
							<PrivateRoute exact path='/invoices' component={Invoice} />
							<Route exact path='/register' component={Register} />
							<Route exact path='/login' component={Login} />
							<PrivateRoute exact path='/invoice-form' component={InvoiceForm} />
							<PrivateRoute exact path='/productlines' component={Productline} />
							<PrivateRoute exact path='/processproducts' component={Processproducts} />
							<PrivateRoute exact path='/productline-form' component={ProductlineForm} />
							<Route component={Default} />
						</Switch>
					</Fragment>
				</AlertProvider>
			</Provider>
		);
	}
}

export default App;
