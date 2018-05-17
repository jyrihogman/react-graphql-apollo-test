/* tslint:disable */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

interface PrivateRouteProps {
	component: any;
	isAuthenticated: boolean;
	path: string;
	exact?: boolean;
}

const PrivateRoute = (props: PrivateRouteProps) => {
	const { component: Component, isAuthenticated, ...rest } = props;
	return (
		<Route
			{...rest}
			render={props =>
				isAuthenticated ? (
					<Component {...props} />
				) : (
						<Redirect to="/auth" />
					)
			}
		/>
	)
}

const mapStateToProps = (state: any) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(PrivateRoute);
