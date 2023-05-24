/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent($filter: ModelSubscriptionEventFilterInput) {
    onCreateEvent(filter: $filter) {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent($filter: ModelSubscriptionEventFilterInput) {
    onUpdateEvent(filter: $filter) {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent($filter: ModelSubscriptionEventFilterInput) {
    onDeleteEvent(filter: $filter) {
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
