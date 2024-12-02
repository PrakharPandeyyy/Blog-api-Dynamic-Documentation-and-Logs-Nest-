import { postStatus } from '../enums/postStatus.enum';
import { PostType } from '../enums/postType.enum';
import { CreatePostMetaOptionsDto } from '../../meta-options/dtos/create-post-meta-options.dto';
export declare class CreatePostDto {
    title: string;
    postType: PostType;
    slug: string;
    status: postStatus;
    content?: string;
    schema?: string;
    featureImageUrl?: string;
    publishOn?: Date;
    tags?: number[];
    metaOptions?: CreatePostMetaOptionsDto | null;
    authorId: number;
}
