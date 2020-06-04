const { gql } = require('apollo-server');


const typeDefs = gql`

  # Queries
  type Query {
    test: String!
    # validate a user on login
    validateUser(username: String!, password: String!): ValidateUserResponse!
    # get all groups that a particular user is a member of
    getGroups(userId: ID!): [Group!]
    # get specific group data based on the passed in groupID
    getIndividualGroup(groupId: ID!): Group!
    # find a specific user
    getUser(username: String!): User!
  }

  # Mutations
  type Mutation {
    # creates a user at sign up
    createUser(email: String!, username: String!, password: String!): User!
    # creates a group from the create group page
    createGroup(group: GroupInput): Group!
    # completes task for the current day
    completeTask(userId: ID!, groupId: ID!): Boolean!
  }

  # Response Types
  type ValidateUserResponse {
    success: Boolean!
    user: User
  }

  # Types
  type Group {
    id: ID!
    groupName: String!
    amount: Int!
    goalName: String!
    charityLink: String!
    deadline: String!
    members: [User]!
  }

  type User {
    id: ID!
    username: String!
    daysCompleted: Int
    lastCompleted: String
    completedToday: Boolean
  }

  # Inputs
  input Member {
    id: ID!
    username: String!
  }

  input GroupInput {
    userId: ID!
    groupName: String!
    amount: Int!
    charityLink: String!
    goalName: String!
    deadline: String!
    members: [Member!]!
  }
`;

module.exports = typeDefs;