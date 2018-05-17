// import { FETCH_DIRECTORS_SUCCESS, FETCH_DIRECTORS_FAILURE } from '../constants/movieConstants';
import * as jwt_decode from 'jwt-decode';

export const openRegistrationModal = () => ({
	type: 'OPEN_REGISTRATION_MODAL',
})

export const closeRegistrationModal = () => ({
	type: 'CLOSE_REGISTRATION_MODAL',
})

export const registerUserSuccess = (movies: any) => ({
	type: 'REGISTER_USER_SUCCESS',
	payload: movies
});

export const registerUserError = (error: any) => ({
	type: 'REGISTER_USER_FAILURE',
	payload: error
});

export const registerUser = (userData: any) => (dispatch: any) => {
	return fetch('http://localhost:3006/api/users/register', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/graphql',
		},
		body: userData
	})
		.then(handleErrors)
		.then(directors => {
			dispatch(registerUserSuccess(directors.data));
			return directors.data;
		})
		.catch(error => dispatch(registerUserError(error)));
};


const setCurrentUser = (decoded: any) => {
	return {
		type: 'LOGIN_USER_SUCCESS',
		payload: { decoded }
	}
}

export const loginUser = (userData: any, history: any) => (dispatch: any) => {
	console.log(userData, history);
	return fetch('http://localhost:3006/api/users/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(userData)
	})
		.then(handleErrors)
		.then(res => {
			const { token } = res;
			localStorage.setItem('jwttoken', token);
			console.log(token);
			// setAuthToken(token);
			// Decode token to get user data
			// history.push('/app');
			const decoded = jwt_decode(token);
			// Set current user
			dispatch(setCurrentUser(decoded));
		})
		.catch(err => err.json())
		.then((err) => dispatch({
			type: 'LOGIN_USER_FAILURE',
			payload: err
		}));
}

function handleErrors(response: Response) {
	if (!response.ok) {
		throw response;
	}
	return response.json();
}