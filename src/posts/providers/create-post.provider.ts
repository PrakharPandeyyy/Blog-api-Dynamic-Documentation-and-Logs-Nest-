import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { TagsService } from 'src/tags/providers/tags.service';
import { Repository } from 'typeorm';
import { Post } from '../entities/post-entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostDto } from '../dto/create-post.dto';
import { ActiveUserData } from 'src/auth/interfaces/active-user.interface';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class CreatePostProvider {
  constructor(
    /**
     *   Injecting the TagsService
     */
    private readonly tagsService: TagsService,
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
  // find author from authorId
  async create(createPostDto: CreatePostDto, user: ActiveUserData) {
    let author = undefined;
    let tags = undefined;
    try {
      // find author from authorId
      author = await this.usersService.findOneById(user.sub);
    } catch (e) {
      throw new ConflictException(e);
    }

    //Find Tags
    tags = await this.tagsService.findMultipleTags(createPostDto.tags);
    if (createPostDto.tags.length != tags.length) {
      throw new BadRequestException('Please check your tags');
    }

    //create post
    const post = this.postsRepository.create({
      ...createPostDto,
      author: author,
      tags: tags,
    });
    try {
      return await this.postsRepository.save(post);
    } catch (e) {
      throw new ConflictException(e, {
        description: 'Ensure post slug is unqiue',
      });
    }
  }
}
