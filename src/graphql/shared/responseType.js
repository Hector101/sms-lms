import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'response',
  description: 'Response message after operation',
  fields: {
    message: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Response message'
    },
  }
});
