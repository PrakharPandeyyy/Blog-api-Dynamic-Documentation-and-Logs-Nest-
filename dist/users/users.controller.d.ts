import { UsersService } from './providers/users.servive';
import { GetUserParamDto } from './dto/get-user-params.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUsers(getUserParamDto: GetUserParamDto, limit: number, page: number): {
        firstName: string;
        email: string;
    }[];
}
