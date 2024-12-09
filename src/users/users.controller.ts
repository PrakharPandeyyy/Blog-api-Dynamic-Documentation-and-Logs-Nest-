import {
  Body,
  Controller,
  Get,
  Post,
  SetMetadata,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './providers/users.service';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateManyUsersDto } from './dto/create-many-users.dto';
import { AccessTokenGuard } from 'src/auth/guards/acess-token/acess-token.guard';
import { Auth } from 'src/auth/decorator/auth.decorator';
import { AuthType } from 'src/auth/enums/auth-type.enum';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Get('/:id?')
  // @ApiOperation({
  //   summary: 'Fetches a list of registed users on the application',
  // })
  // @ApiResponse({
  //   status: 200,
  //   description: 'User fetched Successfullt based on the querry',
  // })
  // @ApiQuery({
  //   name: 'limit',
  //   type: 'number',
  //   required: false,
  //   description: 'Number of entries returned per queries.',
  //   example: 10,
  // })
  // @ApiQuery({
  //   name: 'page',
  //   type: 'number',
  //   required: false,
  //   description: 'The Position of page number that you want api to return.',
  //   example: 1,
  // })
  // public getUsers(
  //   @Param() getUserParamDto: GetUserParamDto,
  //   @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
  //   @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  // ) {
  //   return this.usersService.findAll(getUserParamDto, limit, page);
  // }

  @Post('create')
  // @SetMetadata('authType', 'none')
  @Auth(AuthType.None)
  public createUsers(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Post('create-many')
  public createManyUsers(@Body() createManyUsersDto: CreateManyUsersDto) {
    return this.usersService.createMany(createManyUsersDto);
  }
}
