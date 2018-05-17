export const getMoviesQuery = `
{
  movies {
    id
    title
    genre
    description
    director {
      name
    }
    year
  }
}
`