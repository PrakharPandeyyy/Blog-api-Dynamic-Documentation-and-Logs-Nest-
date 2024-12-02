import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { CreatePostDto } from '../dto/create-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from '../entities/post-entity';
import { Repository } from 'typeorm';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { TagsService } from 'src/tags/providers/tags.service';
import { PatchPostDto } from '../dto/patch-post.dto';

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

  async update(patchPostDto: PatchPostDto) {
    //find the tags
    const tags = await this.tagsService.findMultipleTags(patchPostDto.tags);
    // find the post
    const post = await this.postsRepository.findOneBy({
      id: patchPostDto.id,
    });
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
    return await this.postsRepository.save(post);
  }
  async delete(id: number) {
    await this.postsRepository.delete({ id });
    return { deleted: true, id };
  }
}
