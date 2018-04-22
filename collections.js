/* eslint-disable */

db.createCollection("movies")
db.movies.insert({
	id: '1', title: 'Dunkirk', genre: 'Drama', year: 2017,
	description: 'Allied soldiers from Belgium, the British Empire and France are surrounded by the German Army, and evacuated during a fierce battle in World War II. ',
	directorId: '1'
})
db.movies.insert({
	id: '2', title: 'The Shawshank Redemptiopn', genre: 'Drama/Crime', year: 1992,
	description: 'Allied soldiers from Belgium, the British Empire and France are surrounded by the German Army, and evacuated during a fierce battle in World War II.',
	directorId: '6'
})
db.movies.insert({
	id: '3', title: 'The Godfather', genre: 'Crime/Drama',
	description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son. ',
	year: 1972, directorId: '3'
})
db.movies.insert({
	id: '4', title: 'Goodfellas', genre: 'Crime/Drama', year: 1990,
	description: 'The story of Henry Hill and his life in the mob, covering his relationship with' +
		'his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate. ',
	directorId: '2'
})
db.movies.insert({
	id: '5', title: 'The Usual Suspects', genre: 'Thriller/Mystery', year: 1995,
	description: 'A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, ' +
		'which began when five criminals met at a seemingly random police lineup.',
	directorId: '4'
})
db.movies.insert({
	id: '6', title: 'Pulp fiction', genre: 'Crime/Drama', year: 1994,
	description: 'The lives of two mob hitmen, a boxer, a gangster\'s wife, and a pair of diner bandits intertwine in four tales of violence and redemption. ',
	directorId: '5'
})
db.movies.insert({
	id: '7', title: 'The Dark Knight', genre: 'Action/Crime/Drama', year: 2008,
	description: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, ' +
		'the Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
	directorId: '1'
})

db.createCollection("directors")
db.directors.insert({ id: '1', name: 'Christopher Nolan', birthdate: '30/07/1970', country: 'England' })
db.directors.insert({ id: '2', name: 'Martin Scorsese', birthdate: '17/11/1942', country: 'USA' })
db.directors.insert({ id: '3', name: 'Francis Ford Coppola', birthdate: '07/04/1939', country: 'USA' })
db.directors.insert({ id: '4', name: 'Bryan Singer', birthdate: '17/08/1965', country: 'USA' })
db.directors.insert({ id: '5', name: 'Quentin Tarantino', birthdate: '27/03/1963', country: 'USA' })
db.directors.insert({ id: '6', name: 'Frank Darabont', birthdate: '28/01/1959', country: 'France' })