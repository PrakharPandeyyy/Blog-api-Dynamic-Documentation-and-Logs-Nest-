import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.servive';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService)) // for circular dependency
    private readonly usersService: UsersService,
  ) {}
}
