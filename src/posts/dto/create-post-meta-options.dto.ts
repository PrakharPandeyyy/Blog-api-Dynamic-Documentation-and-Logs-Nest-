import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePostMetaOptionsDto {
  @IsString()
  @IsNotEmpty()
  key: string;

  @IsNotEmpty()
  @IsString()
  value: string;
}
