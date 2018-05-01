const movieReducer = (state: any = [], action: any) => {
	switch (action.type) {
		case 'FETCH_MOVIES_SUCCESS':
			console.log(action.payload);
			return [...action.payload.movies];
		default:
			return state

	}
}

export default movieReducer
