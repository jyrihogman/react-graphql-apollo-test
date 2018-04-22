import * as React from 'react';
import Movie from './Movie';
import { IMovie } from '../../api/models/movie';

const MovieList = ({ movies }: { movies: IMovie[] }) => {
	const movieComponents = movies.map((movie) => <Movie key={movie.id} movie={movie} />)

	return (
		<>
			{movieComponents}
		</>
	);
}


export default MovieList;