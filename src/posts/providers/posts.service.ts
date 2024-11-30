import { Body, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { CreatePostDto } from '../dto/create-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from '../entities/post-entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {
  constructor(
    /**
     *   Injecting the UsersService
     */
    private readonly usersService: UsersService,
    /**
     *  Injecting the repository for the Post entity
     */
    @InjectRepository(Post)
    private readonly postsRepository: Repository<Post>,
  ) {}
  public async create(@Body() createPostDto: CreatePostDto) {
    //creating meta options

    const post = this.postsRepository.create(createPostDto);
    return await this.postsRepository.save(post);
  }
}
