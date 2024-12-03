import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dto/create-post.dto';
import { PatchPostDto } from 'src/users/dto/patch-post.dto';
import { GetPostsDto } from './dto/get-posts.dto';

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('/:userId?')
  getPosts(@Param('userId') userId: string, @Query() postQuery: GetPostsDto) {
    return this.postsService.findAll(postQuery, userId);
  }

  @ApiResponse({
    status: 201,
    description: 'You get 201 response if the post is created',
  })
  @ApiOperation({ summary: 'Create a post' })
  @Post()
  public createPost(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }
  @Patch()
  public updatePost(@Body() patchPostDto: PatchPostDto) {
    return this.postsService.update(patchPostDto);
  }
  @Delete()
  public deletePost(@Query('id', ParseIntPipe) id: number) {
    return this.postsService.delete(id);
  }
}
