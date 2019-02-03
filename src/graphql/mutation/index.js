
import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
} from 'graphql';

// Types
import contactType from '../shared/contactType';
import responseType from '../shared/responseType';
import messageType from '../shared/messageType';

// Resolvers
import createContactResolver from './createContactResolver';
import updateContactResolver from './updateContactResolver';
import deleteContactResolver from './deleteContactResolver';
import sendMessageResolver from './sendMessageResolver';
import readMessageResolver from './readMessageResolver';
import deleteMessageResolver from './deleteMessageResolver';

export default new GraphQLObjectType({
  name: 'RootMutation',
  description: 'Root Mutation for SMS Management Application API',
  fields: {
    createContact: {
      type: contactType,
      description: 'Create contact details',
      args: {
        name: {
          type: new GraphQLNonNull(GraphQLString),
          description: 'Name of contact'
        },
        phoneNumber: {
          type: new GraphQLNonNull(GraphQLString),
          description: 'Phone number of contact must have length of 10'
        }
      },
      resolve: createContactResolver,
    },
    updateContact: {
      type: contactType,
      description: 'Update contact details',
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLInt),
          description: 'Contact ID'
        },
        name: {
          type: GraphQLString,
          description: 'Name of contact'
        },
        phoneNumber: {
          type: GraphQLString,
          description: 'Phone number of contact must have length of 10'
        }
      },
      resolve: updateContactResolver,
    },
    deleteContact: {
      type: responseType,
      description: 'Delete contact by ID',
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLInt),
          description: 'Contact ID'
        },
      },
      resolve: deleteContactResolver,
    },
    sendMessage: {
      type: messageType,
      description: 'Send text message to a receiver',
      args: {
        senderId: {
          type: new GraphQLNonNull(GraphQLInt),
          description: 'Message Sender ID'
        },
        receiverId: {
          type: new GraphQLNonNull(GraphQLInt),
          description: 'Message Receiver ID'
        },
        message: {
          type: new GraphQLNonNull(GraphQLString),
          description: 'Message body'
        },
      },
      resolve: sendMessageResolver,
    },
    readMessage: {
      type: messageType,
      description: 'Read text message',
      args: {
        messageId: {
          type: new GraphQLNonNull(GraphQLInt),
          description: 'Message ID'
        },
      },
      resolve: readMessageResolver,
    },
    deleteMessage: {
      type: responseType,
      description: 'Delete a message',
      args: {
        messageId: {
          type: new GraphQLNonNull(GraphQLInt),
          description: 'Message ID'
        },
      },
      resolve: deleteMessageResolver,
    }
  }
});
