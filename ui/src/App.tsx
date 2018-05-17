import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles';
import red from 'material-ui/colors/red';
// import green from 'material-ui/colors/green';
import indigo from 'material-ui/colors/indigo';
import grey from 'material-ui/colors/grey';

import AppDrawer from './components/AppDrawer';
// import { fetchMovies } from './actions/movieActions';
import movieReducer from './reducers/movieReducer';
import directorReducer from './reducers/directorReducer';
import Authentication from './components/Authentication';
import authReducer from './reducers/authReducer';
import PrivateRoute from './components/PrivateRoute';
// import { getMoviesQuery } from './queries/movieQuery';

const theme = createMuiTheme({
	palette: {
		primary: indigo,
		secondary: grey,
		error: red,
		background: {
			default: indigo['500'],
		}
	},
});

const store = createStore(
	combineReducers({
		movies: movieReducer,
		directors: directorReducer,
		auth: authReducer,
	}),
	applyMiddleware(
		thunk,
	)
);

class App extends React.Component {
	public render() {
		return (
			<Provider store={store}>
				<MuiThemeProvider theme={theme}>
					<BrowserRouter>
						<Switch>
							<PrivateRoute exact path="/" component={AppDrawer} />
							<Route exact path="/auth" component={Authentication} />
							{/* <Route exact path="/" component={AppDrawer} /> */}
						</Switch>
					</BrowserRouter>
				</MuiThemeProvider>
			</Provider>
		);
	}
}

export default App;
