import { UsersService } from 'src/users/providers/users.service';
import { CreatePostDto } from '../dto/create-post.dto';
import { Post } from '../entities/post-entity';
import { Repository } from 'typeorm';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { TagsService } from 'src/tags/providers/tags.service';
import { PatchPostDto } from '../dto/patch-post.dto';
import { GetPostsDto } from '../dto/get-posts.dto';
import { PaginationProvider } from 'src/common/pagination/providers/pagination.provider';
import { Paginated } from 'src/common/pagination/interfaces/paginated.interface';
import { CreatePostProvider } from './create-post.provider';
import { ActiveUserData } from 'src/auth/interfaces/active-user.interface';
export declare class PostsService {
    private readonly usersService;
    private readonly tagsService;
    private readonly postsRepository;
    private readonly metaOptionsRepository;
    private readonly paginationProvider;
    private readonly createPostProvider;
    constructor(usersService: UsersService, tagsService: TagsService, postsRepository: Repository<Post>, metaOptionsRepository: Repository<MetaOption>, paginationProvider: PaginationProvider, createPostProvider: CreatePostProvider);
    create(createPostDto: CreatePostDto, user: ActiveUserData): Promise<Post>;
    findAll(postQuery: GetPostsDto, userId: string): Promise<Paginated<Post>>;
    update(patchPostDto: PatchPostDto): Promise<any>;
    delete(id: number): Promise<{
        deleted: boolean;
        id: number;
    }>;
}
