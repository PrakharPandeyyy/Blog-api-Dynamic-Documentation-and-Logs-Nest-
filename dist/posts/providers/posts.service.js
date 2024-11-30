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
let PostsService = class PostsService {
    constructor(usersService, postsRepository, metaOptionsRepository) {
        this.usersService = usersService;
        this.postsRepository = postsRepository;
        this.metaOptionsRepository = metaOptionsRepository;
    }
    async create(createPostDto) {
        const post = this.postsRepository.create(createPostDto);
        return await this.postsRepository.save(post);
    }
    async findAll(userId) {
        const user = this.usersService.findOneById(+userId);
        const posts = await this.postsRepository.find({
            relations: {
                metaOptions: true,
            },
        });
        return posts;
    }
    async delete(id) {
        await this.postsRepository.delete({ id });
        return { deleted: true, id };
    }
};
exports.PostsService = PostsService;
exports.PostsService = PostsService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(post_entity_1.Post)),
    __param(2, (0, typeorm_1.InjectRepository)(meta_option_entity_1.MetaOption)),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        typeorm_2.Repository,
        typeorm_2.Repository])
], PostsService);
//# sourceMappingURL=posts.service.js.map