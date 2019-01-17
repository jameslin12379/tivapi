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
import {likes} from '../models';
import {LikesRepository} from '../repositories';

export class LikesController {
  constructor(
    @repository(LikesRepository)
    public likesRepository : LikesRepository,
  ) {}
/*
  @post('/likes', {
    responses: {
      '200': {
        description: 'Likes model instance',
        content: {'application/json': {schema: {'x-ts-type': Likes}}},
      },
    },
  })
  async create(@requestBody() likes: Likes): Promise<Likes> {
    return await this.likesRepository.create(likes);
  }
*/
  @get('/likes/count', {
    responses: {
      '200': {
        description: 'Likes model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(likes)) where?: Where,
  ): Promise<Count> {
    return await this.likesRepository.count(where);
  }

  @get('/likes', {
    responses: {
      '200': {
        description: 'Array of Likes model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': likes}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(likes)) filter?: Filter,
  ): Promise<likes[]> {
    return await this.likesRepository.find(filter);
  }
/*
  @patch('/likes', {
    responses: {
      '200': {
        description: 'Likes PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() likes: Likes,
    @param.query.object('where', getWhereSchemaFor(Likes)) where?: Where,
  ): Promise<Count> {
    return await this.likesRepository.updateAll(likes, where);
  }
*/
  @get('/likes/{id}', {
    responses: {
      '200': {
        description: 'Likes model instance',
        content: {'application/json': {schema: {'x-ts-type': likes}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<likes> {
    return await this.likesRepository.findById(id);
  }
/*
  @patch('/likes/{id}', {
    responses: {
      '204': {
        description: 'Likes PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() likes: Likes,
  ): Promise<void> {
    await this.likesRepository.updateById(id, likes);
  }

  @put('/likes/{id}', {
    responses: {
      '204': {
        description: 'Likes PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() likes: Likes,
  ): Promise<void> {
    await this.likesRepository.replaceById(id, likes);
  }

  @del('/likes/{id}', {
    responses: {
      '204': {
        description: 'Likes DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.likesRepository.deleteById(id);
  }
*/
}
