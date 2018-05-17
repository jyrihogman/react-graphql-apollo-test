import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as gravatar from 'gravatar';
import * as bcryptjs from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import * as passport from 'passport';
import { secretOrKey } from '../config/keys';
import { appSchema } from '../models/schema';
import { userModel } from '../models/Users';

const userRouter = express.Router();
const graphqlHTTP = require('express-graphql');

userRouter.use(bodyParser.json());
userRouter.use(bodyParser.urlencoded({ extended: false }));

const createJsonWebToken = (user, res) => {
	// JWT Payload
	const payload = {
		id: user.id,
		name: user.name,
		avatar: user.avatar,
	};

	jwt.sign(
		payload,
		secretOrKey,
		{ expiresIn: 3600 },
		(err, token) => {
			return res.json({
				success: true,
				token: 'Bearer ' + token
			});
		},
	);
}

// route: GET /api/users/test
userRouter.get('/test', (req, res) => res.json({ message: 'Hello World' }));

// route: POST /api/users/register
// purpose: Register user
// Public
userRouter.post('/register', (req, res) => {
	userModel.findOne({ email: req.body.email })
		.then(user => {
			if (user) {
				return res.status(400).json({ email: 'Email already exists' })
			}

			const avatar = gravatar.url(req.body.email, {
				s: '200',
				r: 'pg',
				d: 'mm'
			});

			const newUser = new userModel({
				name: req.body.name,
				username: req.body.username,
				email: req.body.email,
				avatar,
				password: req.body.password,
			});

			bcryptjs.genSalt(10, (err, salt) => {
				bcryptjs.hash(newUser.password, salt, (err, hash) => {
					if (err) {
						throw err;
					}
					newUser.password = hash;
					newUser.save()
						.then(user => res.json(user))
						.catch(err => console.log(err));
				});
			});
		});
});

// route: POST /api/users/login
// purpose: Login user / return JWT token
// Public
userRouter.post('/login', (req, res) => {
	const email = req.body.email;
	const password = req.body.password;

	userModel.findOne({ email })
		.then(user => {
			if (!user) {
				return res.status(400).json({ username: 'User not found' })
			}

			bcryptjs.compare(password, user.password)
				.then(isMatch => isMatch ?
					createJsonWebToken(user, res)
					:
					res.status(400).json({ password: 'Password incorrect' }));
		})
})

// route: POST /api/users/current
// purpose: Return current user
// Private
userRouter.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
	res.json({
		id: req.user.id,
		name: req.user.name,
		emaiol: req.user.email,
	});
})

export default userRouter;