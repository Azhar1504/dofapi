import { model, property } from '@loopback/repository';
import { Item } from '.';

@model()
export class Mount extends Item {
  @property({
    type: 'array',
    itemType: 'object',
  })
  statistics?: object[];

  @property({
    type: 'array',
    itemType: 'object',
  })
  characteristics?: object[];

  @property({
    type: 'array',
    itemType: 'string',
  })
  conditions?: string[];

  @property({
    type: 'array',
    itemType: 'object',
  })
  recipe?: object[];

  constructor(data?: Partial<Mount>) {
    super(data);
  }
}
