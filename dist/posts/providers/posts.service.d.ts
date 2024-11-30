import { UsersService } from 'src/users/providers/users.service';
import { CreatePostDto } from '../dto/create-post.dto';
import { Post } from '../entities/post-entity';
import { Repository } from 'typeorm';
export declare class PostsService {
    private readonly usersService;
    private readonly postsRepository;
    constructor(usersService: UsersService, postsRepository: Repository<Post>);
    create(createPostDto: CreatePostDto): Promise<Post>;
}
