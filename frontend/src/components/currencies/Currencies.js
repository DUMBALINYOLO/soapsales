import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrencies, deleteCurrency } from '..//../actions/currencies';


class Currencies extends Component {
    static propTypes = {
        currencies : PropTypes.array.isRequired,
        getCurrencies: PropTypes.func.isRequired,
        deleteCurrency: PropTypes.func.isRequired,
    };

    componentDidMount(){
        this.props.getCurrencies();
    }

    render(){
        return (
            <Fragment>
                <h1>CURRECNCIES</h1>
                <table className="table table-striped">
                    <thead>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>SYMBOL</th>
                        <th />
                    </thead>
                    <tbody>
                        { this.props.currencies.map(currency =>(
                            <tr key={currency.id}>
                                <td>{ currency.id }</td>
                                <td>{ currency.name }</td>
                                <td>{ currency.rate }</td>
                                <td><button onClick={this.props.deleteCurrency.bind(this, currency.id)} className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

const mapStateToProps = state =>({
    currencies: state.currencies.currencies
})

export default connect(mapStateToProps, {getCurrencies, deleteCurrency} ) (Currencies);
