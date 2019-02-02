
import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'RootMutation',
  description: 'Root Mutation for SMS Management Application API',
  fields: {

  }
});
