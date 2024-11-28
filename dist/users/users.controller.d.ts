import { UsersService } from './providers/users.service';
import { GetUserParamDto } from './dto/get-user-params.dto';
import { createUserDto } from './dto/create-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUsers(getUserParamDto: GetUserParamDto, limit: number, page: number): {
        firstName: string;
        email: string;
    }[];
    createUsers(createUserDto: createUserDto): Promise<import("./entities/user.entity").User>;
}
