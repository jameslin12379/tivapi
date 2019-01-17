import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {post} from '../models';
import {PostRepository} from '../repositories';

export class PostController {
  constructor(
    @repository(PostRepository)
    public postRepository : PostRepository,
  ) {}
/*
  @post('/posts', {
    responses: {
      '200': {
        description: 'Post model instance',
        content: {'application/json': {schema: {'x-ts-type': Post}}},
      },
    },
  })
  async create(@requestBody() post: Post): Promise<Post> {
    return await this.postRepository.create(post);
  }
*/
  @get('/posts/count', {
    responses: {
      '200': {
        description: 'Post model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(post)) where?: Where,
  ): Promise<Count> {
    return await this.postRepository.count(where);
  }

  @get('/posts', {
    responses: {
      '200': {
        description: 'Array of Post model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': post}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(post)) filter?: Filter,
  ): Promise<post[]> {
    return await this.postRepository.find(filter);
  }
/*
  @patch('/posts', {
    responses: {
      '200': {
        description: 'Post PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() post: Post,
    @param.query.object('where', getWhereSchemaFor(Post)) where?: Where,
  ): Promise<Count> {
    return await this.postRepository.updateAll(post, where);
  }
*/
  @get('/posts/{id}', {
    responses: {
      '200': {
        description: 'Post model instance',
        content: {'application/json': {schema: {'x-ts-type': post}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<post> {
    return await this.postRepository.findById(id);
  }
/*
  @patch('/posts/{id}', {
    responses: {
      '204': {
        description: 'Post PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() post: Post,
  ): Promise<void> {
    await this.postRepository.updateById(id, post);
  }

  @put('/posts/{id}', {
    responses: {
      '204': {
        description: 'Post PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() post: Post,
  ): Promise<void> {
    await this.postRepository.replaceById(id, post);
  }

  @del('/posts/{id}', {
    responses: {
      '204': {
        description: 'Post DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.postRepository.deleteById(id);
  }
*/
}
