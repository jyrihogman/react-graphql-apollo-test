import { isEmpty } from '../utils/isEmpty';

const initialState = {
	isAuthenticated: false,
	registrationView: false,
	errors: {}
}

const authReducer = (state: any = initialState, action: any) => {
	switch (action.type) {
		case 'REGISTER_USER_SUCCESS':
			return {
				...state,
				user: action.payload,
			};
		case 'LOGIN_USER_SUCCESS':
			return {
				...state,
				isAuthenticated: !isEmpty(action.payload),
				user: action.payload
			}
		case 'LOGIN_USER_FAILURE':
			return {
				...state,
				isAuthenticated: false,
				errors: action.payload
			}
		case 'OPEN_REGISTRATION_MODAL':
			return {
				...state,
				registrationView: true
			}
		case 'CLOSE_REGISTRATION_MODAL':
			return {
				...state,
				registrationView: false
			}
		default:
			return state

	}
}

export default authReducer;
