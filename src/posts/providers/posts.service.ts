import { Body, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { CreatePostDto } from '../dto/create-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from '../entities/post-entity';
import { Repository } from 'typeorm';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { TagsService } from 'src/tags/tags.service';

@Injectable()
export class PostsService {
  constructor(
    /**
     *   Injecting the UsersService
     */
    private readonly usersService: UsersService,
    /**
     *   Injecting the TagsService
     */
    private readonly tagsService: TagsService,
    /**
     *  Injecting the repository for the Post entity
     */
    @InjectRepository(Post)
    private readonly postsRepository: Repository<Post>,
    /**
     *Injecting the repository for the Meta Options entity
     */
    @InjectRepository(MetaOption)
    private readonly metaOptionsRepository: Repository<MetaOption>,
  ) {}
  async create(createPostDto: CreatePostDto) {
    // find author from authorId
    const author = await this.usersService.findOneById(createPostDto.authorId);

    const tags = await this.tagsService.findMultipleTags(createPostDto.tags);
    //create post
    const post = this.postsRepository.create({
      ...createPostDto,
      author: author,
      tags: tags,
    });
    return await this.postsRepository.save(post);
  }
  async findAll(userId: number) {
    const posts = await this.postsRepository.find({
      relations: {
        metaOptions: true, // <--- This is the relation that we want to load
        // author: true,
        // tags: true,
      },
    });
    return posts;
  }

  async delete(id: number) {
    await this.postsRepository.delete({ id });
    return { deleted: true, id };
  }
}
