import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {userfollowing} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UserfollowingRepository extends DefaultCrudRepository<
    userfollowing,
    typeof userfollowing.prototype.id
    > {
    constructor(
        @inject('datasources.db') dataSource: DbDataSource,
    ) {
        super(userfollowing, dataSource);
    }
}
