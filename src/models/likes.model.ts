import {Entity, model, property} from '@loopback/repository';

@model()
export class likes extends Entity {
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
  likes: number;

  @property({
    type: 'number',
    required: true,
  })
  liked: number;


  constructor(data?: Partial<likes>) {
    super(data);
  }
}
