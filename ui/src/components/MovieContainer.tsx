// import * as React from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions/movieActions';
// import movieReducer from '../reducers/movieReducer';
import { getMoviesQuery } from '../queries/movieQuery';
import MovieList from './MovieList';

const mapStateToProps = (state: any) => {
	return { movies: state.movies }
}

const mapDispatchToProps = (dispatch: any) => ({
	fetchMovies: dispatch(fetchMovies(getMoviesQuery)),
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MovieList);