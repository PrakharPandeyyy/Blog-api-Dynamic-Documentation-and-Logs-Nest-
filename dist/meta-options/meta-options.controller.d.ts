import { MetaOptionsService } from './providers/meta-options.service';
import { CreatePostMetaOptionsDto } from './dtos/create-post-meta-options.dto';
export declare class MetaOptionsController {
    private readonly metaOptionsService;
    constructor(metaOptionsService: MetaOptionsService);
    create(createPostMetaOptionsDto: CreatePostMetaOptionsDto): Promise<import("./meta-option.entity").MetaOption>;
}
