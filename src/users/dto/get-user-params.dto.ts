import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

export class GetUserParamDto {
  @ApiPropertyOptional({
    description: 'Get user with a specific id',
    example: 1234,
  }) // for swagger
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  id?: number;
}
