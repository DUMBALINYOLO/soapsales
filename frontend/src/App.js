import React, {Component, Fragment} from 'react';
import {Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Home/Navbar';
import Default from './components/Home/Default';
import BaseProductList from './components/Products/BaseProductList';
import ShoppingBasket from './components/Products/Basket';

import Taxes from './components/taxes/Taxes';
import TaxForm from './components/taxes/TaxForm';

import Currencies from './components/currencies/Currencies';
import CurrencyForm from './components/currencies/CurrencyForm';

import Bookkeepers from './components/bookkeepers/Bookkeepers';
import BookkeeperForm from './components/bookkeepers/BookkeeperForm';

import AccountTypes from './components/accounttypes/AccountTypes';
import AccountTypeForm from './components/accounttypes/AccountTypeForm';

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

import Productline from "./components/productline/Productline";
import ProductlineForm from './components/productline/ProductlineForm';

import ProcessMachines from "./components/machines/processMachines";
import ProcessMachineForm from './components/machines/processMachineForm';

import ProcessGroups from "./components/machinegroup/processGroups";
import ProcessGroupForm from './components/machinegroup/processGroupForm';

import BillMaterials from "./components/materialline/billMaterials";
import BillMaterialForm from './components/materialline/billMaterialForm';

import Bills from "./components/materials/bills";
import BillForm from './components/materials/billForm';

import WasteReports from "./components/wastes/wasteReports";
import WasteReportForm from './components/wastes/wasteForm';

import ProcessRates from "./components/processrate/processRates";
import ProcessRateForm from './components/processrate/processRateForm';

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


import Sidebar from "./components/sidebar/Sidebar";

//Alert Options
const alertOptions = {
	timeout: 3000,
	position: 'top center'
}

class App extends Component {
	render(){
		return (
			<Provider store={store}>
				<AlertProvider template={AlertTemplate} {...alertOptions} >
					<Fragment>
						<Navbar />
						<Switch>
							<Route exact path='/' component={BaseProductList} />
							<Route path='/taxes' component={Taxes} />
							<Route path='/create-tax' component={TaxForm} />
							<Route path='/shopping-basket' component={ShoppingBasket} />
							<Route exact path='/products' component={Products} />
							<Route exact path='/productsForm' component={ProductForm} />
							<Route exact path='/processMachines' component={ProcessMachines} />
							<Route exact path='/processMachineForm' component={ProcessMachineForm} />
							<Route exact path='/processGroups' component={ProcessGroups} />
							<Route exact path='/processGroupForm' component={ProcessGroupForm} />
							<Route exact path='/billMaterials' component={BillMaterials} />
							<Route exact path='/billMaterialForm' component={BillMaterialForm} />
							<Route exact path='/bills' component={Bills} />
							<Route exact path='/billForm' component={BillForm} />
							<Route exact path='/waste' component={WasteReports} />
							<Route exact path='/waste-report' component={WasteReportForm} />
							<Route exact path='/process-rate' component={ProcessRates} />
							<Route exact path='/process-rate-form' component={ProcessRateForm} />
							<Route exact path='/process' component={Process} />
							<Route exact path='/process-form' component={ProcessForm} />
							<Route exact path='/assets' component={Assets} />
							<Route exact path='/asset-form' component={AssetForm} />
							<Route exact path='/processproducts' component={Processproduct} />
							<Route exact path='/processproduct-form' component={ProcessproductForm} />

							<Route exact path='/sidebar' component={Sidebar} />
							<Route exact path='/products' component={Products} />
							<Route exact path='/productsForm' component={ProductForm} />
							<Route exact path='/processMachines' component={ProcessMachines} />
							<Route exact path='/processMachineForm' component={ProcessMachineForm} />
							<Route exact path='/processGroups' component={ProcessGroups} />
							<Route exact path='/processGroupForm' component={ProcessGroupForm} />
							<Route exact path='/billMaterials' component={BillMaterials} />
							<Route exact path='/billMaterialForm' component={BillMaterialForm} />
							<Route exact path='/bills' component={Bills} />
							<Route exact path='/billForm' component={BillForm} />
							<Route exact path='/waste' component={WasteReports} />
							<Route exact path='/waste-report' component={WasteReportForm} />
							<Route exact path='/process-rate' component={ProcessRates} />
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
							<Route exact path='/accounts' component={Accounts} />
							<Route exact path='/account-form' component={AccountForm} />
							<Route exact path='/accountingConfig' component={AccountingConfig} />
							<Route exact path='/accountingConfig-form' component={AccountingConfigForm} />
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
							<Route exact path='/inventorycategory-form' component={InventorycategoryForm} />
							<Route exact path='/pricinggroup' component={Pricinggroup} />
							<Route exact path='/pricinggroup-form' component={PricinggroupForm} />
							<Route exact path='/customers' component={Customers} />
							<Route exact path='/customer-form' component={CustomerForm} />
							<Route exact path='/payments' component={Payments} />
							<Route exact path='/payment-form' component={PaymentForm} />
							<Route exact path='/salesrep' component={Salesrep} />
							<Route exact path='/salesrep-form' component={SalesrepForm} />

							<Route exact path='/invoices' component={Invoice} />
							<Route exact path='/invoice-form' component={InvoiceForm} />
							<Route exact path='/productlines' component={Productline} />
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
