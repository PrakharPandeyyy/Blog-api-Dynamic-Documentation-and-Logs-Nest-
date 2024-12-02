import { Post } from 'src/posts/entities/post-entity';
export declare class Tag {
    id: number;
    name: string;
    slug: string;
    description?: string;
    schema?: string;
    featuredImageUrl?: string;
    posts: Post[];
    createDate: Date;
    updateDate: Date;
    deleteDate: Date;
}
