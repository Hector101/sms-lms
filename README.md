
# SMS Management API

**Create an SMS management API to create and manage text message transaction between users**

## Technologies Used
- **Node.js** -- Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine, used to write server side application.
- **ExpressJS** -- A Framework built on top of Node.js for building flexible and scalable web applications.
- **GraphQL** -- GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.
- **PostgresQL** -- PostgreSQL is a powerful, open source object-relational database system with over 30 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.

## API Documentation
A detailed API documentation for the application can be found. [here](https://sms-lms.herokuapp.com)


## Tessting Application
Visit the following [Link](https://sms-lms.herokuapp.com/graphql) to test all functionalities, refer to the Documentation above.

##### Examples:
```
query {
  
   contact(id: 1) {
    id
    name
    phoneNumber
  }

  allContacts {
    id
    name
    phoneNumber
  }
  
  sentMessages(senderId: 5) {
    id
    sender {
      id
      name
      phoneNumber
    }
    receiver {
      id
      name
      phoneNumber
    }
    message
    status
    createdAt
    updatedAt
  }
  
  receivedMessages(receiverId: 6) {
    id
    sender {
      id
      name
      phoneNumber
    }
    receiver {
      id
      name
      phoneNumber
    }
    message
    status
    createdAt
    updatedAt
  }
}
```

```
mutation {
  createContact(name: "Hector", phoneNumber: "0802223277") {
    id
    name
    phoneNumber
  }
  
  updateContact(id: 4, phoneNumber: "0907867678") {
    id
    name
    phoneNumber
  }
  
  deleteContact(id: 13) {
    message
  }
  
  sendMessage(senderId: 13, receiverId: 12, message: "Good and you?") {
    sender {
      id
      name
      phoneNumber,
    }
    receiver {
      id
      name
      phoneNumber
    }
    message
    createdAt
    updatedAt
  }
  
  readMessage(messageId: 2) {
    sender {
      id
      name
      phoneNumber,
    }
    receiver {
      id
      name
      phoneNumber
    }
    message
    status
    createdAt
    updatedAt
  }
  
  deleteMessage(messageId: 9) {
    message
  }
}
```

## Prerequisites
The following should be installed in your machine
- Node v10.13.0

## How To Install And Run The Application

* Clone this Repo and `cd` into it
* Install all the dependancies by running the `npm install`
* Run `npm run dev:migration` to setup the database tables.
* Start the application on development mode by running `npm run dev`
* Visit `http://localhost:5000` to see API documentation.
* Visit `http://localhost:5000/graphql` to test all functionalities.


## How To Contribute
Kindly refer to the guide above to setup, and reachout to admin for further instructions

### Issues
Issues are always very welcome. Please be sure to create a constructive issue when neccessary.

### Pull requests
We're glad to get pull request if anything is missing or something is buggy. However, there are a couple of things you can do to make life easier for the maintainers:

- Explain the issue that your PR is solving - or link to an existing issue
- Follow the repository structure, and new sections in the corresponding folders
- Ask questions to admin if unclear
