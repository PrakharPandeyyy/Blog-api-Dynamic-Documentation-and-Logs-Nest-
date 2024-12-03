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
export declare class PostsService {
    private readonly usersService;
    private readonly tagsService;
    private readonly postsRepository;
    private readonly metaOptionsRepository;
    private readonly paginationProvider;
    constructor(usersService: UsersService, tagsService: TagsService, postsRepository: Repository<Post>, metaOptionsRepository: Repository<MetaOption>, paginationProvider: PaginationProvider);
    create(createPostDto: CreatePostDto): Promise<Post>;
    findAll(postQuery: GetPostsDto, userId: string): Promise<Paginated<Post>>;
    update(patchPostDto: PatchPostDto): Promise<any>;
    delete(id: number): Promise<{
        deleted: boolean;
        id: number;
    }>;
}
