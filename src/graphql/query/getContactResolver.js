import db from '../../db';

import GraphQLError from '../../helpers/graphQLError';

const getContactResolver = async (parent, {
  id,
}, { request }) => {
  try {
    const contact = await db.contact.findById(id);

    if(!contact) {
      throw new Error('Contact does not exist');
    }
    
    return contact;
    
  } catch(e) {
    throw new GraphQLError({
      message: e.toString().substr(7),
    });
  }
}

export default getContactResolver;
