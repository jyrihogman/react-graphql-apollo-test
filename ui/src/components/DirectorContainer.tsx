// import * as React from 'react';
import { connect } from 'react-redux';
// import { fetchMovies } from '../actions/movieActions';
// import movieReducer from '../reducers/movieReducer';
// import { getMoviesQuery } from '../queries/movieQuery';
// import MovieList from './MovieList';
import DirectorList from './DirectorList';
import { getDirectorsQuery } from '../queries/directorQueries';
import { fetchDirectors } from '../actions/directorActions';

const mapStateToProps = (state: any) => ({
	directors: state.directors
});

const mapDispatchToProps = (dispatch: any) => ({
	fetchDirectors: dispatch(fetchDirectors(getDirectorsQuery)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DirectorList);