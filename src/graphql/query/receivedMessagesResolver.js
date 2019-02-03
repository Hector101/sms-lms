import db from '../../db';

import GraphQLError from '../../helpers/graphQLError';

const receivedMessagesResolver = async (parent, {
  receiverId,
}, { request }) => {
  try {
    const receivedMessages =  await db.message.findAll({
      where: { receiverId },
      attributes: { exclude: ['senderId', 'receiverId'] },
      include: [
        {
          model: db.contact,
          as: 'receiver',
          attributes: { exclude: ['createdAt', 'updatedAt'] },
        },
        {
          model: db.contact,
          as: 'sender',
          attributes: { exclude: ['createdAt', 'updatedAt'] },
        }
     ]
    });

    return receivedMessages;
  } catch(e) {
    throw new GraphQLError({
      message: e.toString().substr(7),
    });
  }
}

export default receivedMessagesResolver;
