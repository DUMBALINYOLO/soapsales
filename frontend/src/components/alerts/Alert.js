import React, { Component, Fragment } from 'react';
import  { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';



export class Alerts extends Component {
	static propTypes ={
		error: PropTypes.object.isRequired,
	}
	componentDidUpdate(prevProps){
		const { error, alert } = this.props;
		if(error !== prevProps.error){
			if(error.msg.name) alert.error(`Name: ${error.msg.name.join()} `);
			if(error.msg.rate) alert.error(`Rate: ${error.msg.rate.join()}`);
		}
	}

	render(){
		return(
			<Fragment />
		);
	}
}

const mapStateToProps = state => ({
	error: state.errors
});

export default connect(mapStateToProps)(withAlert(Alerts));