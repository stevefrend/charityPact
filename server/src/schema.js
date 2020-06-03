const { gql } = require('apollo-server');


const typeDefs = gql`
  # Queries
  type Query {
    validateUser(username: String!, password: String!): ValidateUserResponse!
    getGroups(userId: ID!): [Group!]
    getIndividualGroup(groupId: ID!): Group!
  }

  # Mutations
  type Mutation {
    createUser(email: String!, username: String!, password: String!): Boolean!
    createGroup(group: GroupInput): Boolean!
    completeTask(userId: ID!, groupId: ID!): Boolean!
  }

  # Response Types
  type ValidateUserResponse {
    success: Boolean!
    user: User
  }

  # Types
  type Group {
    groupId: ID!
    groupName: String!
    amount: Int!
    goalName: String!
    deadline: String!
    members: [User]
  }

  type User {
    id: ID!
    username: String!
  }

  # Inputs
  input Member {
    username: String!
  }

  input GroupInput {
    userId: ID!
    groupName: String!
    amount: Int!
    goalName: String!
    deadline: String!
    members: [Member!]
  }
`;

module.exports = typeDefs;