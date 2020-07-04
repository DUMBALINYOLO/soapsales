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
import AccountTypeDetail from './components/accounttypes/AccountTypeDetail';


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
import AccountConfigDetail from "./components/accountingConfig/AccountingDetail";


import Accounts from './components/accounts/Accounts';
import AccountForm from './components/accounts/AccountForm';


import Products from "./components/Products/products";
import ProductForm from './components/Products/productForm';
import ProductDetails from "./components/Products/details";


import Productline from "./components/productline/Productline";
import ProductlineForm from './components/productline/ProductlineForm';

import ProcessMachines from "./components/machines/processMachines";
import ProcessMachineForm from "./components/machines/processMachineForm";
import ProcessGroups from "./components/machinegroup/processGroups";
import ProcessGroupForm from './components/machinegroup/processGroupForm';




import BillMaterials from "./components/billmaterials/billMaterials";
import BillMaterialDetail from "./components/billmaterials/billMaterialDetail";


import WasteReports from "./components/wastes/wasteReports";
import WasteReportForm from './components/wastes/wasteForm';

import ProcessRates from "./components/processrate/processRates";
import ProcessRateForm from './components/processrate/processRateForm';
import { loadUser } from "./actions/auth";
import Process from "./components/Process/process";
import ProcessForm from './components/Process/processForm';

import Assets from "./components/assets/Assets";
import AssetForm from './components/assets/AssetForm';
import AssetDetail from "./components/assets/AssetDetail";


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
import AccountDetail from "./components/accounts/AccountDetail";

import Journals from "./components/journals/Journals";

import BillPayments from "./components/billpayment/Billpayments";
import BillPaymentDetail from "./components/billpayment/BillpaymentDetail";

import Bills from "./components/bills/Bills";
import BillDetail from "./components/bills/BillDetail";
import Inventoryitems from "./components/inventoryitem/Inventoryitems";
import Productionorders from "./components/productionorder/Productionorders";
import Processproducts from "./components/processproduct/Processproduct";


//Alert Options
const alertOptions = {
	timeout: 3000,
	position: 'top center'
}

class App extends Component {
	// componentDidMount(){
	// 	store.dispatch(loadUser());
	// }


	render(){
		return (
			<Provider store={store}>
				<AlertProvider template={AlertTemplate} {...alertOptions} >
					<Fragment>
						< Home />
						< Alerts />
						<Switch>
							<Route exact path='/' component={Home} />
							<Route exact path='/dashboard' component={Content} />
							<Route exact path='/products' component={Products} />
							<Route exact path='/productsForm' component={ProductForm} />
							<Route exact path='/productdetails' component={ProductDetails} />
							<Route exact path='/processMachines' component={ProcessMachines} />
							<Route exact path='/process-machine-create' component={ProcessMachineForm} />
							<Route exact path='/processGroups' component={ProcessGroups} />
							<Route exact path='/process-machine-group-create' component={ProcessGroupForm} />
							<Route exact path='/billmaterials' component={BillMaterials} />
							<Route exact path='/billmaterial-detail/:id' component={BillMaterialDetail} />
							<Route exact path='/billpayments' component={BillPayments} />
							<Route exact path='/bills' component={Bills} />

							<Route exact path='/bill-detail/:id' component={BillDetail} />

							<Route exact path='/billpayment-detail/:id' component={BillPaymentDetail} />
							<Route exact path='/mali' component={Mali} />
							<Route exact path='/table' component={Thebuli} />
							<Route exact path='/journals' component={Journals} />
							<Route exact path='/tab' component={MainTab} />
							<Route exact path='/waste' component={WasteReports} />
							<Route exact path='/waste-report' component={WasteReportForm} />
							<Route exact path='/process-rate' component={ProcessRates} />
							<Route exact path='/process-rate-form' component={ProcessRateForm} />
							<Route exact path='/process' component={Process} />
							<Route exact path='/process-form' component={ProcessForm} />
							<Route exact path='/assets' component={Assets} />
							<Route exact path='/asset-form' component={AssetForm} />
							<Route exact path='/asset-detail/:id' component={AssetDetail} />
							<Route exact path='/processproducts' component={Processproduct} />
							<Route exact path='/processproduct-form' component={ProcessproductForm} />
							<Route exact path='/products' component={Products} />
							<Route exact path='/productionorders' component={Productionorders} />
							<Route exact path='/productsForm' component={ProductForm} />
							<Route exact path='/processmachines' component={ProcessMachines} />
							<Route exact path='/processgroups' component={ProcessGroups} />
							<Route exact path='/processGroupForm' component={ProcessGroupForm} />
							<Route exact path='/waste' component={WasteReports} />
							<Route exact path='/waste-report' component={WasteReportForm} />
							<Route exact path='/processrates' component={ProcessRates} />
							<Route exact path='/process-rate-form' component={ProcessRateForm} />
							<Route exact path='/process' component={Process} />
							<Route exact path='/process-form' component={ProcessForm} />
							<Route exact path='/assets' component={Assets} />
							<Route exact path='/asset-form' component={AssetForm} />
							<Route exact path='/transactions' component={Transactions} />
							<Route exact path='/currencies' component={Currencies} />
							<Route exact path='/currency-form' component={CurrencyForm} />
							<Route exact path='/bookkeepers' component={Bookkeepers} />
							<Route exact path='/bookkeeper-form' component={BookkeeperForm} />
							<Route exact path='/accounttypes' component={AccountTypes} />
							<Route exact path='/accounttype-form' component={AccountTypeForm} />
							<Route exact path='/accounttype-detail/:id' component={AccountTypeDetail} />
							<Route exact path='/accounts' component={Accounts} />
							<Route exact path='/account-detail/:id' component={AccountDetail} />
							<Route exact path='/account-form' component={AccountForm} />
							<Route exact path='/accountingConfig' component={AccountingConfig} />
							<Route exact path='/accountingConfig-form' component={AccountingConfigForm} />
							<Route exact path='/accountconfig-detail/:id' component={AccountConfigDetail} />
							<Route exact path='/debitnotes' component={Debitnotes} />
							<Route exact path='/debitnote-form' component={DebitnotesForm} />
							<Route exact path='/creditnotes' component={Creditnotes} />
							<Route exact path='/creditnote-form' component={CreditnotesForm} />
							<Route exact path='/orders' component={Orders} />
							<Route exact path='/order-form' component={OrderForm} />
							<Route exact path='/orderpayments' component={Orderpayments} />
							<Route exact path='/orderpayment-form' component={OrderpaymentForm} />
							<Route exact path='/inventorycontrollers' component={Inventorycontroller} />
							<Route exact path='/inventorycontroller-form' component={InventorycontrollerForm} />
							<Route exact path='/unitmeasure' component={Unitmeasure} />
							<Route exact path='/unitmeasure-form' component={UnitmeasureForm} />
							<Route exact path='/inventorycategory' component={Inventorycategory} />
							<Route exact path='/inventoryitems' component={Inventoryitems} />
							<Route exact path='/inventorycategory-form' component={InventorycategoryForm} />
							<Route exact path='/pricinggroups' component={Pricinggroup} />
							<Route exact path='/pricinggroup-form' component={PricinggroupForm} />
							<Route exact path='/customers' component={Customers} />
							<Route exact path='/customer-form' component={CustomerForm} />
							<Route exact path='/payments' component={Payments} />
							<Route exact path='/payment-form' component={PaymentForm} />
							<Route exact path='/sales-rep' component={Salesrep} />
							<Route exact path='/salesrep-form' component={SalesrepForm} />
							<Route exact path='/invoices' component={Invoice} />
							<Route exact path='/register' component={Register} />
							<Route exact path='/login' component={Login} />
							<Route exact path='/invoice-form' component={InvoiceForm} />
							<Route exact path='/productlines' component={Productline} />
							<Route exact path='/processproducts' component={Processproducts} />
							<Route exact path='/productline-form' component={ProductlineForm} />
							<Route component={Default} />
						</Switch>
					</Fragment>
				</AlertProvider>
			</Provider>
		);
	}
}

export default App;
