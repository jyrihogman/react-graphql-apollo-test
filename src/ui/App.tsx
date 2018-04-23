/* slint-disable */
import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import indigo from 'material-ui/colors/indigo';
import AppDrawer from './components/AppDrawer';

const apolloClient = new ApolloClient({
	uri: 'http://localhost:3005/graphql',
});

const theme = createMuiTheme({
	palette: {
		secondary: green,
		error: purple,
		background: {
			default: indigo['500']
		}
	},
});

class App extends React.Component {
	public render() {
		return (
			<MuiThemeProvider theme={theme}>
				<ApolloProvider client={apolloClient} >
					<AppDrawer />
				</ApolloProvider>
			</MuiThemeProvider>
		);
	}
}

export default App;
