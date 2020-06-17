import React, {Component, Fragment} from 'react';
import {Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Home/Navbar';
import Default from './components/Home/Default';
import BaseProductList from './components/Products/BaseProductList';
import ShoppingBasket from './components/Products/Basket';
import Taxes from './components/taxes/Taxes';
import TaxForm from './components/taxes/TaxForm';



class App extends Component {
	render(){
		return (
			<Provider store={store}>
				<Fragment>
					<Navbar />
					<Switch>
						<Route exact path='/' component={BaseProductList} />
						<Route path='/taxes' component={Taxes} />
						<Route path='/create-tax' component={TaxForm} />
						<Route path='/shopping-basket' component={ShoppingBasket} />
						<Route component={Default} />
					</Switch>
				</Fragment>
			</Provider>
		);
	}
}

export default App;
