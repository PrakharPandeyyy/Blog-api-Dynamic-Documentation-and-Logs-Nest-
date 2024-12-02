import { TagsService } from './tags.service';
import { CreateTagDto } from './dtos/create-tag.dto';
export declare class TagsController {
    private readonly tagsService;
    constructor(tagsService: TagsService);
    create(createTagDto: CreateTagDto): Promise<import("./tag.entity").Tag>;
}
