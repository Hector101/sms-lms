import db from '../../db';

import GraphQLError from '../../helpers/graphQLError';

const deleteMessageResolver = async (parent, { messageId }, { request }) => {
  try {
    const message = await db.message.findById(messageId);

    if(!message) {
      throw new Error('Message does not exist');
    }

    try {
      await message.destroy();
    } catch(e) {
      throw new Error('Error occorred deleting message');
    }
    
    return {
      message: 'Message deleted successfully',
    };
  } catch(e) {
    throw new GraphQLError({
      message: e.toString().substr(7),
    });
  }
}

export default deleteMessageResolver;
