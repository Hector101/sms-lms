import db from '../../db';

import GraphQLError from '../../helpers/graphQLError';

const allContactResolver = async (parent, args, { request }) => {
  try {
    const contacts = await db.contact.findAll();
    
    return contacts;
    
  } catch(e) {
    throw new GraphQLError({
      message: e.toString().substr(7),
    });
  }
}

export default allContactResolver;
