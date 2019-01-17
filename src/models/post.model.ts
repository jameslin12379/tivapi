import {Entity, model, property} from '@loopback/repository';

@model()
export class post extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
    default: blank,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
    default: NULL,
  })
  description: string;

  @property({
    type: 'string',
    required: true,
    default: blank,
  })
  imageurl: string;

  @property({
    type: 'string',
    required: true,
    default: blank,
  })
  videourl: string;

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
  userid: number;

  @property({
    type: 'number',
    required: true,
  })
  topicid: number;


  constructor(data?: Partial<post>) {
    super(data);
  }
}
