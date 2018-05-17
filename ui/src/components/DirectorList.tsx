import * as React from 'react';
// import { connect } from 'react-redux';
// import Movie from './Movie';
// import { fetchMovies } from '../actions/movieActions';
// import movieReducer from '../reducers/movieReducer';
// import { getMoviesQuery } from '../queries/movieQuery';
import IDirector from '../interfaces/director'
import Director from './Director';
import Fade from 'material-ui/transitions/Fade';
import Grid from 'material-ui/Grid/Grid';

interface DirectorListProps {
	directors: IDirector[];
}

const DirectorList = ({ directors }: DirectorListProps) => {
	const directorComponents = directors.map((director: IDirector) => {
		return <Director key={director.id} director={director} />
	})

	return directors ?
		<Fade in={true}>
			<Grid item container spacing={16} xs={12}>{directorComponents}</Grid>
		</Fade>
		:
		null;
}

export default DirectorList;