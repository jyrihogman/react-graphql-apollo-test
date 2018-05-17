import { FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE } from '../constants/movieConstants';
import { getAuthToken } from '../utils/getAuthToken';

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
		return fetch('http://localhost:3006/api/graphql', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/graphql',
				'Authorization': getAuthToken('jwttoken') as string,
			},
			body: graphQLQuery
		})
			.then(handleErrors)
			.then(movies => {
				// console.log(todos.data);
				dispatch(fetchMoviesSuccess(movies.data));
				return movies.data;
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