/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateEventInput = {
  id?: string | null,
  name: string,
  type: string,
  createdAt?: string | null,
  Images?: Array< S3ObjectInput | null > | null,
  owner: string,
  isPublic: boolean,
  participants?: Array< string | null > | null,
};

export type S3ObjectInput = {
  bucket: string,
  region: string,
  key: string,
};

export type ModelEventConditionInput = {
  name?: ModelStringInput | null,
  type?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  isPublic?: ModelBooleanInput | null,
  participants?: ModelStringInput | null,
  and?: Array< ModelEventConditionInput | null > | null,
  or?: Array< ModelEventConditionInput | null > | null,
  not?: ModelEventConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Event = {
  __typename: "Event",
  id: string,
  name: string,
  type: string,
  createdAt: string,
  Images?:  Array<S3Object | null > | null,
  owner: string,
  isPublic: boolean,
  participants?: Array< string | null > | null,
  updatedAt: string,
};

export type S3Object = {
  __typename: "S3Object",
  bucket: string,
  region: string,
  key: string,
};

export type UpdateEventInput = {
  id: string,
  name?: string | null,
  type?: string | null,
  createdAt?: string | null,
  Images?: Array< S3ObjectInput | null > | null,
  owner?: string | null,
  isPublic?: boolean | null,
  participants?: Array< string | null > | null,
};

export type DeleteEventInput = {
  id: string,
};

export type ModelEventFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  type?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  isPublic?: ModelBooleanInput | null,
  participants?: ModelStringInput | null,
  and?: Array< ModelEventFilterInput | null > | null,
  or?: Array< ModelEventFilterInput | null > | null,
  not?: ModelEventFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelEventConnection = {
  __typename: "ModelEventConnection",
  items:  Array<Event | null >,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionEventFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  owner?: ModelSubscriptionStringInput | null,
  isPublic?: ModelSubscriptionBooleanInput | null,
  participants?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionEventFilterInput | null > | null,
  or?: Array< ModelSubscriptionEventFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type CreateEventMutationVariables = {
  input: CreateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type CreateEventMutation = {
  createEvent?:  {
    __typename: "Event",
    id: string,
    name: string,
    type: string,
    createdAt: string,
    Images?:  Array< {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null > | null,
    owner: string,
    isPublic: boolean,
    participants?: Array< string | null > | null,
    updatedAt: string,
  } | null,
};

export type UpdateEventMutationVariables = {
  input: UpdateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type UpdateEventMutation = {
  updateEvent?:  {
    __typename: "Event",
    id: string,
    name: string,
    type: string,
    createdAt: string,
    Images?:  Array< {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null > | null,
    owner: string,
    isPublic: boolean,
    participants?: Array< string | null > | null,
    updatedAt: string,
  } | null,
};

export type DeleteEventMutationVariables = {
  input: DeleteEventInput,
  condition?: ModelEventConditionInput | null,
};

export type DeleteEventMutation = {
  deleteEvent?:  {
    __typename: "Event",
    id: string,
    name: string,
    type: string,
    createdAt: string,
    Images?:  Array< {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null > | null,
    owner: string,
    isPublic: boolean,
    participants?: Array< string | null > | null,
    updatedAt: string,
  } | null,
};

export type GetEventQueryVariables = {
  id: string,
};

export type GetEventQuery = {
  getEvent?:  {
    __typename: "Event",
    id: string,
    name: string,
    type: string,
    createdAt: string,
    Images?:  Array< {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null > | null,
    owner: string,
    isPublic: boolean,
    participants?: Array< string | null > | null,
    updatedAt: string,
  } | null,
};

export type ListEventsQueryVariables = {
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventsQuery = {
  listEvents?:  {
    __typename: "ModelEventConnection",
    items:  Array< {
      __typename: "Event",
      id: string,
      name: string,
      type: string,
      createdAt: string,
      Images?:  Array< {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null > | null,
      owner: string,
      isPublic: boolean,
      participants?: Array< string | null > | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type EventsByDateQueryVariables = {
  type: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type EventsByDateQuery = {
  EventsByDate?:  {
    __typename: "ModelEventConnection",
    items:  Array< {
      __typename: "Event",
      id: string,
      name: string,
      type: string,
      createdAt: string,
      Images?:  Array< {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null > | null,
      owner: string,
      isPublic: boolean,
      participants?: Array< string | null > | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateEventSubscriptionVariables = {
  filter?: ModelSubscriptionEventFilterInput | null,
};

export type OnCreateEventSubscription = {
  onCreateEvent?:  {
    __typename: "Event",
    id: string,
    name: string,
    type: string,
    createdAt: string,
    Images?:  Array< {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null > | null,
    owner: string,
    isPublic: boolean,
    participants?: Array< string | null > | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateEventSubscriptionVariables = {
  filter?: ModelSubscriptionEventFilterInput | null,
};

export type OnUpdateEventSubscription = {
  onUpdateEvent?:  {
    __typename: "Event",
    id: string,
    name: string,
    type: string,
    createdAt: string,
    Images?:  Array< {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null > | null,
    owner: string,
    isPublic: boolean,
    participants?: Array< string | null > | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteEventSubscriptionVariables = {
  filter?: ModelSubscriptionEventFilterInput | null,
};

export type OnDeleteEventSubscription = {
  onDeleteEvent?:  {
    __typename: "Event",
    id: string,
    name: string,
    type: string,
    createdAt: string,
    Images?:  Array< {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null > | null,
    owner: string,
    isPublic: boolean,
    participants?: Array< string | null > | null,
    updatedAt: string,
  } | null,
};
