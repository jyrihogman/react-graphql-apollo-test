import * as React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import indigo from 'material-ui/colors/indigo';
import AppDrawer from './components/AppDrawer';
import { fetchMovies } from './actions/movieActions';
import movieReducer from './reducers/movieReducer';
import { getMoviesQuery } from './queries/movieQuery';

const theme = createMuiTheme({
	palette: {
		primary: indigo,
		secondary: green,
		error: purple,
		background: {
			default: indigo['500']
		}
	},
});

const store = createStore(
	combineReducers({
		movies: movieReducer
	}),
	applyMiddleware(
		thunk,
	)
);

store
	.dispatch(fetchMovies(getMoviesQuery))

class App extends React.Component {
	public render() {
		return (
			<Provider store={store}>
				<MuiThemeProvider theme={theme}>
					<AppDrawer />
				</MuiThemeProvider>
			</Provider>
		);
	}
}

export default App;
