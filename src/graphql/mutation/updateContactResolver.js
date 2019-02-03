import db from '../../db';

import GraphQLError from '../../helpers/graphQLError';

const updateContactResolver = async (parent, {
  id,
  name,
  phoneNumber,
}, { request }) => {
  try {
    if(!!(phoneNumber && (isNaN(phoneNumber) || phoneNumber.length !== 10))) {
      throw new Error('Provide a valid Phone Number');
    }

    const updateOptions = Object.assign({},
      name && { name },
      phoneNumber && { phoneNumber },
    );

    const contact = await db.contact.findById(id);

    if(!contact) {
      throw new Error('Contact does not exist');
    }

    await contact.update(updateOptions)
    
    return {
      id,
      name: contact.name,
      phoneNumber: contact.phoneNumber,
    };
  } catch(e) {
    throw new GraphQLError({
      message: e.toString().substr(7),
    });
  }
}

export default updateContactResolver;
