import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';
import { CreatePostDto } from 'src/posts/dto/create-post.dto';

export class PatchPostDto extends PartialType(CreatePostDto) {
  // exported from  swagger and not from class-validator so that it can be shown in swagger documentation
  @ApiProperty({
    description: 'The id of the post that needs to be updated',
    example: 1,
  })
  @IsInt()
  @IsNotEmpty()
  id: number;
}
