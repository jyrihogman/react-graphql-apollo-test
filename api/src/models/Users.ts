import * as mongoose from 'mongoose';

export interface IUser {
	_id: string;
	name: string;
	username: string;
	password: string;
	email: number;
	avatar: boolean;
	date: Date;
}

export const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	avatar: {
		type: String,
	},
	date: {
		type: Date,
		default: Date.now()
	}
});

export const userModel = mongoose.model('users', userSchema) as any;