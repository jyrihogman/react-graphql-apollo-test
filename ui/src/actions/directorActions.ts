import { FETCH_DIRECTORS_SUCCESS, FETCH_DIRECTORS_FAILURE } from '../constants/movieConstants';
import { getAuthToken } from '../utils/getAuthToken';

export const fetchDirectorsSuccess = (movies: any) => ({
	type: FETCH_DIRECTORS_SUCCESS,
	payload: movies
});


export const fetchDirectorsError = (error: any) => ({
	type: FETCH_DIRECTORS_FAILURE,
	payload: { error }
});

export const fetchDirectors = (graphQLQuery: any) => (dispatch: any) => {
	return fetch('http://localhost:3006/api/graphql', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/graphql',
			'Authorization': getAuthToken('jwttoken') as string,
		},
		body: graphQLQuery
	})
		.then(handleErrors)
		.then(directors => {
			dispatch(fetchDirectorsSuccess(directors.data));
			return directors.data;
		})
		.catch(error => dispatch(fetchDirectorsError(error)));
};

function handleErrors(response: Response) {
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response.json();
}