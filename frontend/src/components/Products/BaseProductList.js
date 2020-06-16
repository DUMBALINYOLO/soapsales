import React, {Component, Fragment} from 'react';
// import BaseProduct from './BaseProduct';
import ProductTitle from './ProductTitle';

class BaseProductList extends Component {
	state = {
		products:[]
	}
	render(){
		return (
			<Fragment>
				<div className='py-5'>
					<div className="container">
						<div className="row">
							<ProductTitle name="our" title="products"/>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default BaseProductList;
