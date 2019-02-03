import db from '../../db';

import GraphQLError from '../../helpers/graphQLError';

const sentMessagesResolver = async (parent, {
  senderId,
}, { request }) => {
  try {
    const sentMessages =  await db.message.findAll({
      where: { senderId },
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

    return sentMessages;
  } catch(e) {
    throw new GraphQLError({
      message: e.toString().substr(7),
    });
  }
}

export default sentMessagesResolver;
