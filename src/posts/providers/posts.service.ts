import {
  BadRequestException,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { CreatePostDto } from '../dto/create-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from '../entities/post-entity';
import { Repository } from 'typeorm';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { TagsService } from 'src/tags/providers/tags.service';
import { PatchPostDto } from '../dto/patch-post.dto';
import { GetPostsDto } from '../dto/get-posts.dto';
import { PaginationProvider } from 'src/common/pagination/providers/pagination.provider';
import { Paginated } from 'src/common/pagination/interfaces/paginated.interface';

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
    /**
     *   Injecting the PaginationProvider
     */
    private readonly paginationProvider: PaginationProvider,
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
  async findAll(
    postQuery: GetPostsDto,
    userId: string,
  ): Promise<Paginated<Post>> {
    const posts = await this.paginationProvider.paginateQuery(
      {
        limit: postQuery.limit,
        page: postQuery.page,
      },
      this.postsRepository,
    );
    return posts;
  }

  async update(patchPostDto: PatchPostDto) {
    //find the tags
    let tags = undefined;
    let post = undefined;

    try {
      tags = await this.tagsService.findMultipleTags(patchPostDto.tags);
    } catch (e) {
      throw new RequestTimeoutException(
        'Unable to process your request at the moment',
      );
    }
    if (!tags || tags.length !== patchPostDto.tags.length) {
      throw new BadRequestException(
        'Please check your tag ids and ensure they are correct',
      );
    }

    // find the post

    try {
      post = await this.postsRepository.findOneBy({
        id: patchPostDto.id,
      });
    } catch (e) {
      throw new RequestTimeoutException(
        'Unable to process your request at the moment',
      );
    }
    if (!post) {
      throw new BadRequestException('The post ID does not exist');
    }

    //update the post
    post.title = patchPostDto.title ?? post.title;
    post.content = patchPostDto.content ?? post.content;
    post.status = patchPostDto.status ?? post.status;
    post.postType = patchPostDto.postType ?? post.postType;
    post.slug = patchPostDto.slug ?? post.slug;
    post.featuredImageUrl =
      patchPostDto.featuredImageUrl ?? post.featuredImageUrl;
    post.publishOn = patchPostDto.publishOn ?? post.publishOn;

    // assign thew new tags
    post.tags = tags;
    //save
    try {
      await this.postsRepository.save(post);
    } catch (e) {
      throw new RequestTimeoutException(
        'Unable to process your request at the moment',
      );
    }
    return post;
  }
  async delete(id: number) {
    await this.postsRepository.delete({ id });
    return { deleted: true, id };
  }
}
