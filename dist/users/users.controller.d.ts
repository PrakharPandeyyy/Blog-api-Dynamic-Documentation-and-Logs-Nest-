import { UsersService } from './providers/users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateManyUsersDto } from './dto/create-many-users.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUsers(createUserDto: CreateUserDto): Promise<import("./entities/user.entity").User>;
    createManyUsers(createManyUsersDto: CreateManyUsersDto): Promise<{
        users: import("./entities/user.entity").User[];
    }>;
}
