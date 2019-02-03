import db from '../../db';

import GraphQLError from '../../helpers/graphQLError';

const createLocationResolver = async (parent, {
  name,
  phoneNumber,
}, { request }) => {
  try {
    if(isNaN(phoneNumber) || phoneNumber.length !== 10) {
      throw new Error('Provide a valid Phone Number');
    }

    const newContact = await db.contact.findOrCreate({
      where: { phoneNumber },
      defaults: {
        name,
        phoneNumber,
     }
    }).spread((contact, created) => {
      if(!created) return null;
      return contact;
    });

    if(!newContact) {
      throw new Error('Contact already added');
    };
    
    return {
      id: newContact.id,
      name,
      phoneNumber,
    };
  } catch(e) {
    throw new GraphQLError({
      message: e.toString().substr(7),
    });
  }
}

export default createLocationResolver;
