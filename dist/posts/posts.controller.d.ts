import { PostsService } from './providers/posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { PatchPostDto } from 'src/users/dto/patch-post.dto';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    createPost(createPostDto: CreatePostDto): Promise<import("./entities/post-entity").Post>;
    updatePost(patchPostsDto: PatchPostDto): void;
}
