import {
    Count,
    CountSchema,
    Filter,
    repository,
    Where,
} from '@loopback/repository';
import {
    post,
    param,
    get,
    getFilterSchemaFor,
    getWhereSchemaFor,
    patch,
    put,
    del,
    requestBody,
} from '@loopback/rest';
import {userfollowing} from '../models';
import {UserfollowingRepository} from '../repositories';

export class UserfollowingController {
    constructor(
        @repository(UserfollowingRepository)
        public userfollowingRepository : UserfollowingRepository,
    ) {}
    /*
      @post('/users', {
        responses: {
          '200': {
            description: 'User model instance',
            content: {'application/json': {schema: {'x-ts-type': User}}},
          },
        },
      })
      async create(@requestBody() user: User): Promise<User> {
        return await this.userRepository.create(user);
      }
    */
    @get('/userfollowings/count', {
        responses: {
            '200': {
                description: 'Userfollowing model count',
                content: {'application/json': {schema: CountSchema}},
            },
        },
    })
    async count(
        @param.query.object('where', getWhereSchemaFor(userfollowing)) where?: Where,
    ): Promise<Count> {
        return await this.userfollowingRepository.count(where);
    }

    @get('/userfollowings', {
        responses: {
            '200': {
                description: 'Array of User model instances',
                content: {
                    'application/json': {
                        schema: {type: 'array', items: {'x-ts-type': userfollowing}},
                    },
                },
            },
        },
    })
    async find(
        @param.query.object('filter', getFilterSchemaFor(userfollowing)) filter?: Filter,
    ): Promise<userfollowing[]> {
        return await this.userfollowingRepository.find(filter);
    }
    /*
      @patch('/users', {
        responses: {
          '200': {
            description: 'User PATCH success count',
            content: {'application/json': {schema: CountSchema}},
          },
        },
      })
      async updateAll(
        @requestBody() user: User,
        @param.query.object('where', getWhereSchemaFor(User)) where?: Where,
      ): Promise<Count> {
        return await this.userRepository.updateAll(user, where);
      }
    */
    @get('/userfollowings/{id}', {
        responses: {
            '200': {
                description: 'User model instance',
                content: {'application/json': {schema: {'x-ts-type': userfollowing}}},
            },
        },
    })
    async findById(@param.path.number('id') id: number): Promise<userfollowing> {
        return await this.userfollowingRepository.findById(id);
    }
    /*
      @patch('/users/{id}', {
        responses: {
          '204': {
            description: 'User PATCH success',
          },
        },
      })
      async updateById(
        @param.path.number('id') id: number,
        @requestBody() user: User,
      ): Promise<void> {
        await this.userRepository.updateById(id, user);
      }

      @put('/users/{id}', {
        responses: {
          '204': {
            description: 'User PUT success',
          },
        },
      })
      async replaceById(
        @param.path.number('id') id: number,
        @requestBody() user: User,
      ): Promise<void> {
        await this.userRepository.replaceById(id, user);
      }

      @del('/users/{id}', {
        responses: {
          '204': {
            description: 'User DELETE success',
          },
        },
      })
      async deleteById(@param.path.number('id') id: number): Promise<void> {
        await this.userRepository.deleteById(id);
      }
    */
}
