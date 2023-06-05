/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
      id
      name
      type
      createdAt
      Images {
        bucket
        region
        key
      }
      owner
      isPublic
      participants
      updatedAt
    }
  }
`;
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        type
        createdAt
        Images {
          bucket
          region
          key
        }
        owner
        isPublic
        participants
        updatedAt
      }
      nextToken
    }
  }
`;
export const eventsByDate = /* GraphQL */ `
  query EventsByDate(
    $type: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    EventsByDate(
      type: $type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        type
        createdAt
        Images {
          bucket
          region
          key
        }
        owner
        isPublic
        participants
        updatedAt
      }
      nextToken
    }
  }
`;
