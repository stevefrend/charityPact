import { gql } from 'apollo-boost';

export const queries = {
  GET_GROUPS: gql`
    query getGroups($userID: ID) {
      getGroups(userID: $userId) {
        groupName
      }
    }
  `,
  GET_GROUP: gql`
    query getIndividualGroup($groupId: ID) {
      getIndividualGroup(groupId: $groupId) {
        groupName
        goalName
        amount
        charity
        deadline
        members
      }
    }
  `
};
