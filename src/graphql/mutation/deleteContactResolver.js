import db from '../../db';

import GraphQLError from '../../helpers/graphQLError';

const deleteContactResolver = async (parent, {
  id,
}, { request }) => {
  try {
    const contact = await db.contact.findById(id);

    if(!contact) {
      throw new Error('Contact does not exist');
    }

    try {
      await contact.destroy();
    } catch(e) {
      throw new Error('Error occorred deleting contact');
    }
    
    return {
      message: 'Contact deleted successfully',
    };
  } catch(e) {
    throw new GraphQLError({
      message: e.toString().substr(7),
    });
  }
}

export default deleteContactResolver;
