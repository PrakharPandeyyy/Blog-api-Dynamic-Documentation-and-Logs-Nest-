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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePostDto = void 0;
const class_validator_1 = require("class-validator");
const postStatus_enum_1 = require("../enums/postStatus.enum");
const postType_enum_1 = require("../enums/postType.enum");
const create_post_meta_options_dto_1 = require("../../meta-options/dtos/create-post-meta-options.dto");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
class CreatePostDto {
}
exports.CreatePostDto = CreatePostDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Title of the post',
        example: 'This is a post title',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(4),
    (0, class_validator_1.MaxLength)(512),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePostDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: postType_enum_1.PostType,
        description: 'Possible values are post, page, series or story',
        example: 'post',
    }),
    (0, class_validator_1.IsEnum)(postType_enum_1.PostType),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePostDto.prototype, "postType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Slug of the post',
        example: 'this-is-a-post-title',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(256),
    (0, class_validator_1.Matches)(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
        message: 'A Slug should be all small and separated by hyphens',
    }),
    __metadata("design:type", String)
], CreatePostDto.prototype, "slug", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: postStatus_enum_1.postStatus,
        description: 'Possible values are draft, published, scheduled or published',
        example: 'draft',
    }),
    (0, class_validator_1.IsEnum)(postStatus_enum_1.postStatus),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePostDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Content of the post',
        example: 'This is a post content',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePostDto.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Serialize JSON schema for the post',
        example: '{"type": "object"}',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsJSON)(),
    __metadata("design:type", String)
], CreatePostDto.prototype, "schema", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'URL of the feature image',
        example: 'https://example.com/image.jpg',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    (0, class_validator_1.MaxLength)(1024),
    __metadata("design:type", String)
], CreatePostDto.prototype, "featuredImageUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Date when the post should be published',
        example: '2021-01-01T00:00:00Z',
    }),
    (0, class_validator_1.IsISO8601)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], CreatePostDto.prototype, "publishOn", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Array of ids Tags ',
        example: [1, 2],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsInt)({ each: true }),
    __metadata("design:type", Array)
], CreatePostDto.prototype, "tags", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        required: false,
        items: {
            type: 'object',
            properties: {
                metavalue: {
                    type: 'json',
                    description: 'The metaValue is a JSON string',
                    example: '{"sidebarEnable":true}',
                },
            },
        },
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => create_post_meta_options_dto_1.CreatePostMetaOptionsDto),
    __metadata("design:type", create_post_meta_options_dto_1.CreatePostMetaOptionsDto)
], CreatePostDto.prototype, "metaOptions", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        type: 'integer',
        required: true,
        example: 1,
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreatePostDto.prototype, "authorId", void 0);
//# sourceMappingURL=create-post.dto.js.map