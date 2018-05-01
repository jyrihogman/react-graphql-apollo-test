import * as React from 'react';
import Movie from './Movie';

const MovieList = (props: any) => {
	const movieComponents = props.movies.map((movie: any) => {
		return <Movie key={movie.id} movie={movie} />
	})

	return (
		<>
			{movieComponents}
		</>
	);
}

export default MovieList;