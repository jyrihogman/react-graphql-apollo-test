import {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLBoolean,
	GraphQLID,
	GraphQLList
} from 'graphql';

import { directorModel } from './director';
import { movieModel } from './movie';

export const MovieType: GraphQLObjectType = new GraphQLObjectType({
	name: 'Movie',
	fields: () => ({
		id: { type: GraphQLID },
		title: { type: GraphQLString },
		genre: { type: GraphQLString },
		year: { type: GraphQLInt },
		description: { type: GraphQLString },
		director: {
			type: DirectorType,
			resolve: (parent, args) => {
				return directorModel.findOne({ id: parent.directorId });
			}
		}
	})
});

export const DirectorType: GraphQLObjectType = new GraphQLObjectType({
	name: 'Director',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		birthdate: { type: GraphQLString },
		country: { type: GraphQLString },
		movies: {
			type: new GraphQLList(MovieType),
			resolve: (parent, args) => {
				return movieModel.find({ directorId: parent.id });
			}
		}
	}),
});

const rootQuery = new GraphQLObjectType({
	name: 'rootQuery',

	fields: {
		movie: {
			type: MovieType,
			args: { id: { type: GraphQLID } },
			resolve: (parent, args) => {
				return movieModel.findOne({ id: args.id });
			}
		},
		director: {
			type: DirectorType,
			args: { id: { type: GraphQLString } },
			resolve: (parent, args) => {
				return directorModel.findOne({ id: args.id });
			}
		},
		movies: {
			type: new GraphQLList(MovieType),
			resolve: (parent, args) => {
				return movieModel.find({});
			}
		},
		directors: {
			type: new GraphQLList(DirectorType),
			resolve: (parent, args) => {
				return directorModel.find({})
			}
		},
	}
})

const mutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: {
		addDirector: {
			type: DirectorType,
			args: {
				name: { type: GraphQLString },
				birthdate: { type: GraphQLString },
				country: { type: GraphQLString },
			},
			resolve: (parent, args) => {
				const director = new directorModel({
					name: args.name,
					birthdate: args.age,
					country: args.country
				});
				director.save();
			}
		}
	}
})

export const appSchema = new GraphQLSchema({
	query: rootQuery
});
