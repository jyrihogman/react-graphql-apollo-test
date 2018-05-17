import * as express from 'express';
import * as passport from 'passport';
import { appSchema } from '../models/schema';

const graphQLRouter = express.Router();
const graphqlHTTP = require('express-graphql');

graphQLRouter.use('/graphql', passport.authenticate('jwt', { session: false }), graphqlHTTP({
	schema: appSchema,
	graphiql: false
}))


graphQLRouter.use('/graphiql', graphqlHTTP({
	schema: appSchema,
	graphiql: true
}))

export default graphQLRouter;