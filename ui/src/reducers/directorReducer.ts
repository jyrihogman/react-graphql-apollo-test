const directorReducer = (state: any = [], action: any) => {
	switch (action.type) {
		case 'FETCH_DIRECTORS_SUCCESS':
			console.log(action.payload);
			return [...action.payload.directors];
		default:
			return state

	}
}

export default directorReducer
