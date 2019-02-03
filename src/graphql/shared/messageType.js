import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean,
} from 'graphql';

import contactType from './contactType';

export default new GraphQLObjectType({
  name: 'message',
  description: 'SMS transaction details',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'Message ID'
    },
    sender: {
      type: new GraphQLNonNull(contactType),
      description: 'Message sender details'
    },
    receiver: {
      type: new GraphQLNonNull(contactType),
      description: 'Message receiver details',
    },
    message: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Mesage Body',
    },
    status: {
      type: new GraphQLNonNull(GraphQLBoolean),
      description: 'Mesage read status',
    },
    createdAt: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Time stamp when message was sent',
    },
    updatedAt: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Time stamp when message was updated',
    }
  }
});
