import * as mongoose from 'mongoose';

export interface IMovie {
	_id: string;
	id: string;
	title: string;
	genre: string;
	description: string;
	year: number;
	directorId: boolean;
}

export const movieSchema = new mongoose.Schema({
	id: String,
	title: String,
	genre: String,
	year: Number,
	description: String,
	directorId: String,
});

export const movieModel = mongoose.model('movies', movieSchema);