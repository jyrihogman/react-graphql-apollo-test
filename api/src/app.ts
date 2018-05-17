import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as cors from 'cors';
import * as mongoose from 'mongoose';
import * as passport from 'passport';
import { buildSchema } from 'graphql';

import { appSchema } from './models/schema';
import userRouter from './routes/users';
import graphQLRouter from './routes/graphql';
import { initializePassport } from './config/passport';

class App {
	public app: express.Application;

	constructor() {
		this.app = express();

		this.config();
		this.passportSetup();
		this.routes();

		mongoose.connect('mongodb://127.0.0.1:27017/test')
			.then(() => console.log('We are connected!'))
			.catch((err) => console.log(err));
	}

	private config(): void {
		this.app.use(cors({
			origin: '*',
			optionsSuccessStatus: 200
		}));
	}

	private routes(): void {
		this.app.use('/api', graphQLRouter);
		this.app.use('/api/users', userRouter)
	}

	private passportSetup(): void {
		this.app.use(passport.initialize());
		initializePassport(passport);
	}
}

export default new App().app;