import * as React from 'react';
import Login from './Login';
// import Registration from './Registration';

class Authentication extends React.Component {
	render() {
		return <Login {...this.props} />;
	}
}

export default Authentication;