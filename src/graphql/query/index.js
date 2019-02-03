
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';

// Types
import contactType from '../shared/contactType';
import messageType from '../shared/messageType';

// Resolvers
import getContactResolver from './getContactResolver';
import allContactResolver from './allContactResolver';
import sentMessagesResolver from './sentMessagesResolver';
import receivedMessagesResolver from './receivedMessagesResolver';

export default new GraphQLObjectType({
  name: 'RootQuery',
  description: 'Root Query for SMS Management Application API',
  fields: {
    contact: {
      type: contactType,
      description: 'Get a specific contact by ID',
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLInt),
          description: 'Contact ID'
        },
      },
      resolve: getContactResolver,
    },
    allContacts: {
      type: new GraphQLList(contactType),
      description: 'Get a specific contact by ID',
      resolve: allContactResolver,
    },
    sentMessages: {
      type: new GraphQLList(messageType),
      description: 'All sent messages from by contact',
      args: {
        senderId: {
          type: new GraphQLNonNull(GraphQLInt),
          description: 'Message Sender ID'
        },
      },
      resolve: sentMessagesResolver,
    },
    receivedMessages: {
      type: new GraphQLList(messageType),
      description: 'All sent messages from by contact',
      args: {
        receiverId: {
          type: new GraphQLNonNull(GraphQLInt),
          description: 'Message Receiver ID'
        },
      },
      resolve: receivedMessagesResolver,
    }
  }
});
