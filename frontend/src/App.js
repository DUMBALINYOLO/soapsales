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
//import TaxDetail from './components/taxes/TaxDetail';

import Currencies from './components/currencies/Currencies';
import CurrencyForm from './components/currencies/CurrencyForm';
import CurrencyDetail from './components/currencies/CurrencyDetail';


import Bookkeepers from './components/bookkeepers/Bookkeepers';
import BookkeeperForm from './components/bookkeepers/BookkeeperForm';
import BookkeeperDetail from './components/bookkeepers/BookkeeperDetail';

import AccountTypes from './components/accounttypes/AccountTypes';
import AccountTypeForm from './components/accounttypes/AccountTypeForm';
import AccountTypeDetail from './components/accounttypes/AccountTypeDetail';

import Form from './components/accounts/testForm';


import Orders from './components/orders/Orders';
import OrderForm from './components/orders/OrderForm';
import OrderDetail from './components/orders/OrderDetail';

import Invoice from './components/invoices/Invoices';
import InvoiceForm from './components/invoices/InvoiceForm';
import InvoiceDetail from './components/invoices/InvoiceDetail';

import Salesrep from './components/salesreps/Salesrep';
import SalesrepForm from './components/salesreps/SalesrepForm';
import SalesrepDetail from './components/salesreps/SalesrepDetail';

import Customers from './components/customers/Customers';
import CustomerForm from './components/customers/CustomerForm';
import CustomerDetail from './components/customers/CustomerDetail';

import Pricinggroup from './components/pricinggroups/Pricinggroup';
import PricinggroupForm from './components/pricinggroups/PricinggroupForm';
import PricinggroupDetail from './components/pricinggroups/PricinggroupDetail';

import Unitmeasure from './components/unitmeasure/Unitmeasure';
import UnitmeasureForm from './components/unitmeasure/UnitmeasureForm';
import UnitmeasureDetail from './components/unitmeasure/UnitmeasureDetail';

import Orderpayments from './components/orderpayments/Orderpayments';
import OrderpaymentForm from './components/orderpayments/OrderpaymentForm';
import OrderpaymentDetail from './components/orderpayments/OrderpaymentDetail';

import Payments from './components/payments/Payments';
import PaymentForm from './components/payments/PaymentForm';
import PaymentDetail from './components/payments/PaymentDetail';

import Debitnotes from './components/debitnotes/Debitnotes';
import DebitnotesForm from './components/debitnotes/DebitnoteForm';
import DebitnoteDetail from './components/debitnotes/DebitnoteDetail';

import Creditnotes from './components/creditnotes/Creditnotes';
import CreditnotesForm from './components/creditnotes/CreditnoteForm';
import CreditnoteDetail from './components/creditnotes/CreditnoteDetail';

import AccountingConfig from './components/accountingConfig/AccountingConfig';
import AccountingConfigForm from './components/accountingConfig/AccountingConfigForm';
import AccountConfigDetail from "./components/accountingConfig/AccountingDetail";


import Accounts from './components/accounts/Accounts';
import AccountForm from './components/accounts/AccountForm';
import AccountDetail from './components/accounts/AccountDetail';


import Products from "./components/Products/products";
import ProductForm from './components/Products/productForm';
import ProductDetail from "./components/Products/ProductDetail";


import Productline from "./components/productline/Productline";
import ProductlineForm from './components/productline/ProductlineForm';
import ProductlineDetail from "./components/productline/ProductlineDetail";

import ProcessMachines from "./components/machines/processMachines";
import ProcessMachineDetail from "./components/machines/processMachineDetail";

import ProcessMachineForm from "./components/machines/processMachineForm";
import ProcessGroups from "./components/machinegroup/processGroups";
import ProcessGroupForm from './components/machinegroup/processGroupForm';
import ProcessGroupDetail from "./components/machinegroup/processGroupDetail";



import BillMaterials from "./components/billmaterials/billMaterials";


import BillMaterials from "./components/billmaterials/billMaterials";
import BillMaterialDetail from "./components/billmaterials/billMaterialDetail";

import WasteReports from "./components/wastes/wasteReports";
import WasteReportForm from './components/wastes/wasteForm';
import WasteReportDetail from "./components/wastes/wasteReportDetail";

import ProcessRates from "./components/processrate/processRates";
import ProcessRateForm from './components/processrate/processRateForm';
import ProcessRateDetail from "./components/processrate/processRateDetail";

import { loadUser } from "./actions/auth";

import Process from "./components/Process/process";
import ProcessForm from './components/Process/processForm';
import ProcessDetail from "./components/Process/processDetail";

import Assets from "./components/assets/Assets";
import AssetForm from './components/assets/AssetForm';
import AssetDetail from "./components/assets/AssetDetail";

import Transactions from "./components/transactions/Transactions";
import TransactionDetail from "./components/transactions/TransactionDetail";


import Inventorycontroller from './components/inventorycontrollers/Inventorycontroller';
import InventorycontrollerForm from './components/inventorycontrollers/InventorycontrollerForm';
import InventorycontrollerDetail from './components/inventorycontrollers/InventorycontrollerDetail';

import Inventorycategory from './components/inventorycategory/Inventorycategory';
import InventorycategoryForm from './components/inventorycategory/InventorycategoryForm';
import InventorycategoryDetail from './components/inventorycategory/InventorycategoryDetail';

import Processproduct from "./components/processedproducts/Processedproduct";
import ProcessproductForm from './components/processedproducts/ProcessedproductForm';
import ProcessedproductDetail from "./components/processedproducts/ProcessedproductDetail";

import Mali from './components/table/Mali';
import Thebuli from './components/table/Thebuli';
import MainTab from './components/configurations/MainConfig';
// import Sidebar from "./components/sidebar/Sidebar";
import Register from "./components/employees/Register";
import Login from "./components/employees/Login";
import PrivateRoute from "./components/common/PrivateRoute";

import Journals from "./components/journals/Journals";
import JournalDetail from "./components/journals/JournalDetail";

import BillPayments from "./components/billpayment/Billpayments";
import BillPaymentDetail from "./components/billpayment/BillpaymentDetail";

import Bills from "./components/bills/Bills";
import BillDetail from "./components/bills/BillDetail";

import EquipmentComponents from "./components/equipmentcomponent/equipmentcomponents";
import EquipmentComponentDetail from "./components/equipmentcomponent/equipmentcomponentDetail";

import Inventoryitems from "./components/inventoryitem/Inventoryitems";
import InventoryitemDetail from "./components/inventoryitem/InventoryitemDetail";

import Productionorders from "./components/productionorder/Productionorders";
import ProductionorderDetail from "./components/productionorder/ProductionorderDetail";

import Processproducts from "./components/processproduct/Processproduct";
import ProcessproductDetail from "./components/processproduct/ProcessproductDetail";

import InvoiceExample from "./components/nestedforms/NestedForm";
import Dashboard from './dashboard/components/Dashboard';


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
						< Alerts />
						<Switch>
							<Route exact path='/' component={Home} />
							<Route exact path='/form' component={Form} />

							<Route exact path='/dashboard' component={Content} />
							<Route exact path='/dash-view' component={Dashboard} />
							<Route exact path='/test-form' component={InvoiceExample} />

							<Route exact path='/processmachines' component={ProcessMachines} />
							<Route exact path='/process-machine-create' component={ProcessMachineForm} />

							<Route exact path='/process-machine-group-create' component={ProcessGroupForm} />
							<Route exact path='/processgroups' component={ProcessGroups} />


							<Route exact path='/billmaterials' component={BillMaterials} />
							<Route exact path='/billmaterial-detail/:id' component={BillMaterialDetail} />

							<Route exact path='/bills' component={Bills} />


							<Route exact path='/billpayments' component={BillPayments} />
							<Route exact path='/billpayment-detail/:id' component={BillPaymentDetail} />

							<Route exact path='/mali' component={Mali} />
							<Route exact path='/table' component={Thebuli} />
							<Route exact path='/journals' component={Journals} />
							<Route exact path='/tab' component={MainTab} />

							<Route exact path='/process-rate' component={ProcessRates} />
							<Route exact path='/process-rate-form' component={ProcessRateForm} />


							<Route exact path='/assets' component={Assets} />
							<Route exact path='/asset-form' component={AssetForm} />
							<Route exact path='/asset-detail/:id' component={AssetDetail} />

							<Route exact path='/processproducts' component={Processproduct} />
							<Route exact path='/processproduct-form' component={ProcessproductForm} />

							<Route exact path='/productionorders' component={Productionorders} />

							<Route exact path='/products' component={Products} />
							<Route exact path='/product-detail/:id' component={ProductDetail} />
							<Route exact path='/productsForm' component={ProductForm} />

							<Route exact path='/waste' component={WasteReports} />
							<Route exact path='/waste-report' component={WasteReportForm} />
							<Route exact path='/waste-report-detail/:id' component={WasteReportDetail} />

							<Route exact path='/process' component={Process} />
							<Route exact path='/process-form' component={ProcessForm} />

							<Route exact path='/transactions' component={Transactions} />

							<Route exact path='/currencies' component={Currencies} />
							<Route exact path='/currency-form' component={CurrencyForm} />
							<Route exact path='/currency-detail/:id' component={CurrencyDetail} />

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
							<Route exact path='/creditnote-detail/:id' component={CreditnoteDetail} />

							<Route exact path='/orders' component={Orders} />
							<Route exact path='/order-form' component={OrderForm} />

							<Route exact path='/orderpayments' component={Orderpayments} />
							<Route exact path='/orderpayment-form' component={OrderpaymentForm} />

							<Route exact path='/inventorycontrollers' component={Inventorycontroller} />
							<Route exact path='/inventorycontroller-form' component={InventorycontrollerForm} />

							<Route exact path='/unitmeasure' component={Unitmeasure} />
							<Route exact path='/unitmeasure-form' component={UnitmeasureForm} />
							<Route exact path='/unitmeasure-detail/:id' component={UnitmeasureDetail} />

							<Route exact path='/inventorycategory' component={Inventorycategory} />
							<Route exact path='/inventorycategory-form' component={InventorycategoryForm} />

							<Route exact path='/inventoryitems' component={Inventoryitems} />

							<Route exact path='/pricinggroups' component={Pricinggroup} />
							<Route exact path='/pricinggroup-form' component={PricinggroupForm} />

							<Route exact path='/customers' component={Customers} />
							<Route exact path='/customer-form' component={CustomerForm} />

							<Route exact path='/payments' component={Payments} />
							<Route exact path='/payment-form' component={PaymentForm} />

							<Route exact path='/sales-rep' component={Salesrep} />
							<Route exact path='/salesrep-form' component={SalesrepForm} />
							<Route exact path='/salesrep-detail/:id' component={SalesrepDetail} />

							<Route exact path='/invoices' component={Invoice} />
							<Route exact path='/invoice-form' component={InvoiceForm} />

							<Route exact path='/register' component={Register} />
							<Route exact path='/login' component={Login} />

							<Route exact path='/productlines' component={Productline} />
							<Route exact path='/productline-form' component={ProductlineForm} />

							<Route exact path='/processproducts' component={Processproducts} />


							<Route component={Default} />
						</Switch>
					</Fragment>
				</AlertProvider>
			</Provider>
		);
	}
}

export default App;
