import db from '../../db';

import GraphQLError from '../../helpers/graphQLError';

const readMessageResolver = async (parent, {
  messageId,
}, { request }) => {
  try {
    const message = await db.message.update({ status: true }, { where: { id: messageId } });

    if(!message[0]) {
      throw new Error('Message does not exists');
    };

    const textMessage =  await db.message.findOne({
      where: { id: messageId },
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

    return textMessage;
  } catch(e) {
    throw new GraphQLError({
      message: e.toString().substr(7),
    });
  }
}

export default readMessageResolver;
