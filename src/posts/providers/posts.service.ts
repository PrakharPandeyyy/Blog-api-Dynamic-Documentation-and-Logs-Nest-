import { Body, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { CreatePostDto } from '../dto/create-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from '../entities/post-entity';
import { Repository } from 'typeorm';
import { MetaOption } from 'src/meta-options/meta-option.entity';

@Injectable()
export class PostsService {
  constructor(
    private readonly usersService: UsersService,
    /**
     *
     */
    @InjectRepository(Post)
    private readonly postsRepository: Repository<Post>,

    /**
     *
     */
    @InjectRepository(MetaOption)
    private readonly metaOptionsRepository: Repository<MetaOption>,
  ) {}
  public async create(@Body() createPostDto: CreatePostDto) {
    //creating meta options
    const metaOptions = createPostDto.metaOptions
      ? this.metaOptionsRepository.create(createPostDto.metaOptions)
      : null;
    if (metaOptions) {
      await this.metaOptionsRepository.save(metaOptions);
    }
    const post = this.postsRepository.create(createPostDto);
    if (metaOptions) {
      post.metaOptions = metaOptions;
    }
    return await this.postsRepository.save(post);
  }
}
