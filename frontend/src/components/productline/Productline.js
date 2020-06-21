import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProductlines, deleteProductline } from "../../actions/productlines";


class Productline extends Component {
    static propTypes = {
        productlines : PropTypes.array.isRequired,
        getProductlines: PropTypes.func.isRequired,
        deleteProductline: PropTypes.func.isRequired,
    };

    componentDidMount(){
        this.props.getProducts();
    }

	render(){
		return (
			<Fragment>
                <h1>PRODUCT LINE</h1>
                <table className="table table-striped">
                    <thead>
                        <th>ID</th>
                        <th>PRODUCT</th>
                        <th>UNTI PRICE</th>
                        <th>VALUE</th>
                        <th>QUANTITY</th>
                        <th />
                    </thead>
                    <tbody>
                        { this.props.products.map(productline =>(
                            <tr key={productline.id}>
                                <td>{ productline.id }</td>
                                <td>{ productline.product }</td>
                                <td>{ productline.unit_price }</td>
                                <td>{ productline.value }</td>
                                <td>{ productline.quantity }</td>
                                <td><button onClick={this.props.deleteProductline.bind(this, productline.id)} className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        )) }
                    </tbody>
                </table>
			</Fragment>
		);
	}
}

const mapStateToProps = state =>({
    productlines: state.productlines.productlines
})

export default connect(mapStateToProps, { getProductlines, deleteProductline} ) (Productline);
