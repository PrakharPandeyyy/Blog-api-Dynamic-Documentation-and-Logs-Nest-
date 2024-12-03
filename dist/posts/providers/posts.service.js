"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../../users/providers/users.service");
const typeorm_1 = require("@nestjs/typeorm");
const post_entity_1 = require("../entities/post-entity");
const typeorm_2 = require("typeorm");
const meta_option_entity_1 = require("../../meta-options/meta-option.entity");
const tags_service_1 = require("../../tags/providers/tags.service");
let PostsService = class PostsService {
    constructor(usersService, tagsService, postsRepository, metaOptionsRepository) {
        this.usersService = usersService;
        this.tagsService = tagsService;
        this.postsRepository = postsRepository;
        this.metaOptionsRepository = metaOptionsRepository;
    }
    async create(createPostDto) {
        const author = await this.usersService.findOneById(createPostDto.authorId);
        const tags = await this.tagsService.findMultipleTags(createPostDto.tags);
        const post = this.postsRepository.create({
            ...createPostDto,
            author: author,
            tags: tags,
        });
        return await this.postsRepository.save(post);
    }
    async findAll(userId) {
        const posts = await this.postsRepository.find({
            relations: {
                metaOptions: true,
            },
        });
        return posts;
    }
    async update(patchPostDto) {
        let tags = undefined;
        let post = undefined;
        try {
            tags = await this.tagsService.findMultipleTags(patchPostDto.tags);
        }
        catch (e) {
            throw new common_1.RequestTimeoutException('Unable to process your request at the moment');
        }
        if (!tags || tags.length !== patchPostDto.tags.length) {
            throw new common_1.BadRequestException('Please check your tag ids and ensure they are correct');
        }
        try {
            post = await this.postsRepository.findOneBy({
                id: patchPostDto.id,
            });
        }
        catch (e) {
            throw new common_1.RequestTimeoutException('Unable to process your request at the moment');
        }
        if (!post) {
            throw new common_1.BadRequestException('The post ID does not exist');
        }
        post.title = patchPostDto.title ?? post.title;
        post.content = patchPostDto.content ?? post.content;
        post.status = patchPostDto.status ?? post.status;
        post.postType = patchPostDto.postType ?? post.postType;
        post.slug = patchPostDto.slug ?? post.slug;
        post.featuredImageUrl =
            patchPostDto.featuredImageUrl ?? post.featuredImageUrl;
        post.publishOn = patchPostDto.publishOn ?? post.publishOn;
        post.tags = tags;
        try {
            await this.postsRepository.save(post);
        }
        catch (e) {
            throw new common_1.RequestTimeoutException('Unable to process your request at the moment');
        }
        return post;
    }
    async delete(id) {
        await this.postsRepository.delete({ id });
        return { deleted: true, id };
    }
};
exports.PostsService = PostsService;
exports.PostsService = PostsService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, typeorm_1.InjectRepository)(post_entity_1.Post)),
    __param(3, (0, typeorm_1.InjectRepository)(meta_option_entity_1.MetaOption)),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        tags_service_1.TagsService,
        typeorm_2.Repository,
        typeorm_2.Repository])
], PostsService);
//# sourceMappingURL=posts.service.js.map