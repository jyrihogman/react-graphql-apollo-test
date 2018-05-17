const errorReducer = (state: any = {}, action: any) => {
	switch (action.type) {
		case 'REGISTER_USER_FAILURE':
			return action.payload;
		default:
			return state

	}
}

export default errorReducer
