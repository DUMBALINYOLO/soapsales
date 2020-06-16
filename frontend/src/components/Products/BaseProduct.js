import React, {Component, Fragment} from 'react';


class BaseProduct extends Component {
	state = {
		products:[]
	}
	render(){
		return (
			<Fragment>
				<h3>Its the Base Product Page</h3>
			</Fragment>
		);
	}
}

export default BaseProduct;
