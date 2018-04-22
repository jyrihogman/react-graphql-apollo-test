import * as express from 'express';
import * as cors from 'cors';
import * as mongoose from 'mongoose';
import { buildSchema } from 'graphql';
import { appSchema } from './models/schema';

class App {
	public app: express.Application;

	constructor() {
		this.app = express();
		this.config();
		mongoose.connect('mongodb://127.0.0.1:27017/test');
		const db = mongoose.connection;
		db.on('error', console.error.bind(console, 'connection error:'));
		db.once('open', () => {
			console.log('We are connected!')
		})
	}


	private config(): void {
		const graphqlHTTP = require('express-graphql');
		this.app.use(cors({
			origin: '*',
			optionsSuccessStatus: 200
		}));
		this.app.use('/graphql', graphqlHTTP({
			schema: appSchema,
			graphiql: true
		}))
	}
}

export default new App().app;