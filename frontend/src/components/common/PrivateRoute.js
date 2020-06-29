import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import {ProgressSpinner} from 'primereact/progressspinner';

const PrivateRoute =({ component: Component , auth, ...rest}) => (
		<Route
			{...rest}
			render = {props =>{
				if(auth.loading){
					return <ProgressSpinner/>

				}else if(!auth.isAuthenticated){
					return <Redirect to="/" />
				}else {
					return < Component {...props} />;	
				}
				
			}}

		/>
	);

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps, )(PrivateRoute);