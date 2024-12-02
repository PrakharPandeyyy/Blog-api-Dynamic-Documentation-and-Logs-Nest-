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
exports.PostsController = void 0;
const common_1 = require("@nestjs/common");
const posts_service_1 = require("./providers/posts.service");
const swagger_1 = require("@nestjs/swagger");
const create_post_dto_1 = require("./dto/create-post.dto");
const patch_post_dto_1 = require("../users/dto/patch-post.dto");
let PostsController = class PostsController {
    constructor(postsService) {
        this.postsService = postsService;
    }
    getPosts(userId) {
        return this.postsService.findAll(userId);
    }
    createPost(createPostDto) {
        return this.postsService.create(createPostDto);
    }
    updatePost(patchPostDto) {
        return this.postsService.update(patchPostDto);
    }
    deletePost(id) {
        return this.postsService.delete(id);
    }
};
exports.PostsController = PostsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "getPosts", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'You get 201 response if the post is created',
    }),
    (0, swagger_1.ApiOperation)({ summary: 'Create a post' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_post_dto_1.CreatePostDto]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "createPost", null);
__decorate([
    (0, common_1.Patch)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [patch_post_dto_1.PatchPostDto]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "updatePost", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Query)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "deletePost", null);
exports.PostsController = PostsController = __decorate([
    (0, swagger_1.ApiTags)('Posts'),
    (0, common_1.Controller)('posts'),
    __metadata("design:paramtypes", [posts_service_1.PostsService])
], PostsController);
//# sourceMappingURL=posts.controller.js.map