import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  public getUsers() {
    return 'Users Endpoints';
  }
}