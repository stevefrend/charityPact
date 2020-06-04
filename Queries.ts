import { gql } from 'apollo-boost';

export const queries = {
  GET_GROUPS: gql`
    query getGroups($userID: ID) {
      getGroups(userID: $userId) {
        groupName
      }
    }
  `,
};
