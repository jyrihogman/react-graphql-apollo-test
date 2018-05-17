import * as passportJWT from 'passport-jwt';
import * as mongoose from 'mongoose';
import { userModel } from '../models/Users';
import { secretOrKey } from './keys';

const opts = {
	jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey,
};

export const initializePassport = passport => {
	passport.use(
		new passportJWT.Strategy(opts, (jwtPayload, done) => {
			userModel.findById(jwtPayload.id)
				.then(user => user ? done(null, user) : done(null, false))
				.catch(err => console.log(err));
		}));
}
