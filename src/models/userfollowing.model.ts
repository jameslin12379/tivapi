import {Entity, model, property} from '@loopback/repository';

@model({settings: {"strict":false}})
export class userfollowing extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @property({
    type: 'date',
    required: true,
  })
  datecreated: string;

  @property({
    type: 'date',
    required: true,
  })
  dateedited: string;

  @property({
    type: 'number',
    required: true,
  })
  following: number;

  @property({
    type: 'number',
    required: true,
  })
  followed: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<userfollowing>) {
    super(data);
  }
}
