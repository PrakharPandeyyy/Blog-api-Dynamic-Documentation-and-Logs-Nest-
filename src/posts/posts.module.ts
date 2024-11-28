import { Module } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';
import { Post } from './entities/post-entity';

@Module({
  providers: [PostsService],
  controllers: [PostsController],
  imports: [UsersModule, TypeOrmModule.forFeature([Post])],
})
export class PostsModule {}
