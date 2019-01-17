import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {likes} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class LikesRepository extends DefaultCrudRepository<
  likes,
  typeof likes.prototype.id
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(likes, dataSource);
  }
}
