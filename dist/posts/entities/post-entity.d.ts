import { PostType } from '../enums/postType.enum';
import { postStatus } from '../enums/postStatus.enum';
import { MetaOption } from 'src/meta-options/meta-option.entity';
export declare class Post {
    id: number;
    title: string;
    postType: PostType;
    slug: string;
    status: postStatus;
    content?: string;
    schema?: string;
    featuredImageUrl?: string;
    publishedOn?: Date;
    tags?: string[];
    metaOptions?: MetaOption;
}
