import { PostsService } from './providers/posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { PatchPostDto } from 'src/users/dto/patch-post.dto';
import { GetPostsDto } from './dto/get-posts.dto';
import { ActiveUserData } from 'src/auth/interfaces/active-user.interface';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    getPosts(userId: string, postQuery: GetPostsDto): Promise<import("../common/pagination/interfaces/paginated.interface").Paginated<import("./entities/post-entity").Post>>;
    createPost(createPostDto: CreatePostDto, user: ActiveUserData): Promise<import("./entities/post-entity").Post>;
    updatePost(patchPostDto: PatchPostDto): Promise<any>;
    deletePost(id: number): Promise<{
        deleted: boolean;
        id: number;
    }>;
}
