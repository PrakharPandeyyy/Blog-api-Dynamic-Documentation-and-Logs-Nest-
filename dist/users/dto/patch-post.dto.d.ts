import { CreatePostDto } from 'src/posts/dto/create-post.dto';
declare const PatchPostDto_base: import("@nestjs/common").Type<Partial<CreatePostDto>>;
export declare class PatchPostDto extends PatchPostDto_base {
    id: number;
}
export {};
