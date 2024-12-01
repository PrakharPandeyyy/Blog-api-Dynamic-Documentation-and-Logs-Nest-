import { PostsService } from './providers/posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { PatchPostDto } from 'src/users/dto/patch-post.dto';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    getPosts(userId: number): Promise<import("./entities/post-entity").Post[]>;
    createPost(createPostDto: CreatePostDto): Promise<import("./entities/post-entity").Post>;
    updatePost(patchPostDto: PatchPostDto): Promise<import("./entities/post-entity").Post>;
    deletePost(id: number): Promise<{
        deleted: boolean;
        id: number;
    }>;
}
