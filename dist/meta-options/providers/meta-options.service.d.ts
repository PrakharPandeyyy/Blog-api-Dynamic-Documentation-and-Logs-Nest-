import { CreatePostMetaOptionsDto } from '../dtos/create-post-meta-options.dto';
import { MetaOption } from '../meta-option.entity';
import { Repository } from 'typeorm';
export declare class MetaOptionsService {
    private readonly metaOptionsRepository;
    constructor(metaOptionsRepository: Repository<MetaOption>);
    create(createPostMetaOptionsDto: CreatePostMetaOptionsDto): Promise<MetaOption>;
}
