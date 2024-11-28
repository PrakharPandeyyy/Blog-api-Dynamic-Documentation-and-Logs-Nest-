import {
  IsArray,
  IsEnum,
  IsISO8601,
  IsJSON,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  Max,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { postStatus } from '../enums/postStatus.enum';
import { PostType } from '../enums/postType.enum';
import { CreatePostMetaOptionsDto } from '../../meta-options/dtos/create-post-meta-options.dto';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({
    description: 'Title of the post',
    example: 'This is a post title',
  })
  @IsString()
  @MinLength(4)
  @MaxLength(512)
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    enum: PostType,
    description: 'Possible values are post, page, series or story',
    example: 'post',
  })
  @IsEnum(PostType)
  @IsNotEmpty()
  postType: PostType;

  @ApiProperty({
    description: 'Slug of the post',
    example: 'this-is-a-post-title',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(256)
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message: 'A Slug should be all small and separated by hyphens',
  })
  slug: string;

  @ApiProperty({
    enum: postStatus,
    description: 'Possible values are draft, published, scheduled or published',
    example: 'draft',
  })
  @IsEnum(postStatus)
  @IsNotEmpty()
  status: postStatus;

  @ApiPropertyOptional({
    description: 'Content of the post',
    example: 'This is a post content',
  })
  @IsString()
  @IsOptional()
  content?: string;

  @ApiPropertyOptional({
    description: 'Serialize JSON schema for the post',
    example: '{"type": "object"}',
  })
  @IsOptional()
  @IsJSON()
  schema?: string;

  @ApiPropertyOptional({
    description: 'URL of the feature image',
    example: 'https://example.com/image.jpg',
  })
  @IsOptional()
  @IsUrl()
  @MaxLength(1024)
  featureImageUrl?: string;

  @ApiPropertyOptional({
    description: 'Date when the post should be published',
    example: '2021-01-01T00:00:00Z',
  })
  @IsISO8601()
  @IsOptional()
  publishOn?: Date;

  @ApiPropertyOptional({
    description: 'Tags for the post',
    example: ['tag1', 'tag2'],
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @MinLength(3, { each: true })
  tags?: string[];

  @ApiPropertyOptional({
    type: 'array',
    required: false,
    items: {
      type: 'object',
      properties: {
        key: {
          type: 'string',
          example: 'key1',
        },
        value: {
          type: 'string',
          example: 'value1',
        },
      },
    },
    description: 'Meta options for the post',
    example: [
      {
        key: 'key1',
        value: 'value1',
      },
    ],
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreatePostMetaOptionsDto)
  metaOptions?: CreatePostMetaOptionsDto[];
}
