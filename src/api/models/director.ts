import * as mongoose from 'mongoose';

export interface Director {
	_id: string;
	id: string;
	name: string;
	birthdate: string;
	country: boolean;
}

export const directorSchema = new mongoose.Schema({
	id: String,
	name: String,
	birthdate: String,
	country: String
});

export const directorModel = mongoose.model('directors', directorSchema);