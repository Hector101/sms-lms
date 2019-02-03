import db from '../../db';

import GraphQLError from '../../helpers/graphQLError';

const sendMessageResolver = async (parent, {
  senderId,
  receiverId,
  message,
}, { request }) => {
  try {
    const newMessage = await db.message.create({
      senderId,
      receiverId,
      message,
    });

    const textMessage =  await db.message.findOne({
      where: { id: newMessage.id },
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

export default sendMessageResolver;
