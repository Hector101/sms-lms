import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'contact',
  description: 'Contaction details of user',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'Contact ID'
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Contact name',
    },
    phoneNumber: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Phone number of a contact',
    },
  }
});
