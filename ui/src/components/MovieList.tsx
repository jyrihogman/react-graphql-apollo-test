import * as React from 'react';
import Fade from 'material-ui/transitions/Fade';
// import { connect } from 'react-redux';
import Movie from './Movie';
// import { fetchMovies } from '../actions/movieActions';
// import movieReducer from '../reducers/movieReducer';
// import { getMoviesQuery } from '../queries/movieQuery';
import IMovie from '../interfaces/movie';
import Grid from 'material-ui/Grid/Grid';

interface MovieListProps {
	movies: IMovie[];
}

const MovieList = ({ movies }: MovieListProps) => {
	const movieComponents = movies.map((movie: any) => {
		return <Movie key={movie.id} movie={movie} />
	})

	return movies ?
		<Fade in={true}>
			<Grid item container spacing={16} xs={12}>{movieComponents}</Grid>
		</Fade>
		:
		null;
}

export default MovieList;