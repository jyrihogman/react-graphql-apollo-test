import { FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE } from '../constants/movieConstants';

export const fetchMoviesSuccess = (movies: any) => ({
	type: FETCH_MOVIES_SUCCESS,
	payload: movies
});


export const fetchMoviesError = (error: any) => ({
	type: FETCH_MOVIES_FAILURE,
	payload: { error }
});

export function fetchMovies(graphQLQuery: any) {
	return (dispatch: any) => {
		return fetch('http://localhost:3006/graphql', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/graphql',
			},
			body: graphQLQuery
		})
			.then(handleErrors)
			.then(todos => {
				// console.log(todos.data);
				dispatch(fetchMoviesSuccess(todos.data));
				return todos.data;
			})
			.catch(error => dispatch(fetchMoviesError(error)));
	};
}

function handleErrors(response: Response) {
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response.json();
}