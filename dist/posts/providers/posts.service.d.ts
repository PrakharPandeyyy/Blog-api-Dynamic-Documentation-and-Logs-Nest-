import { UsersService } from 'src/users/providers/users.service';
import { CreatePostDto } from '../dto/create-post.dto';
import { Post } from '../entities/post-entity';
import { Repository } from 'typeorm';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { TagsService } from 'src/tags/tags.service';
export declare class PostsService {
    private readonly usersService;
    private readonly tagsService;
    private readonly postsRepository;
    private readonly metaOptionsRepository;
    constructor(usersService: UsersService, tagsService: TagsService, postsRepository: Repository<Post>, metaOptionsRepository: Repository<MetaOption>);
    create(createPostDto: CreatePostDto): Promise<Post>;
    findAll(userId: number): Promise<Post[]>;
    delete(id: number): Promise<{
        deleted: boolean;
        id: number;
    }>;
}
