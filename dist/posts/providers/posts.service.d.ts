import { UsersService } from 'src/users/providers/users.service';
import { CreatePostDto } from '../dto/create-post.dto';
import { Post } from '../entities/post-entity';
import { Repository } from 'typeorm';
import { MetaOption } from 'src/meta-options/meta-option.entity';
export declare class PostsService {
    private readonly usersService;
    private readonly postsRepository;
    private readonly metaOptionsRepository;
    constructor(usersService: UsersService, postsRepository: Repository<Post>, metaOptionsRepository: Repository<MetaOption>);
    create(createPostDto: CreatePostDto): Promise<Post>;
}
