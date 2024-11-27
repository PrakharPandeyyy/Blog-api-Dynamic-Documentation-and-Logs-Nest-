import { GetUserParamDto } from '../dto/get-user-params.dto';
import { AuthService } from 'src/auth/providers/auth.service';
export declare class UsersService {
    private readonly authService;
    constructor(authService: AuthService);
    findAll(getUserParamDto: GetUserParamDto, limit: number, page: number): {
        firstName: string;
        email: string;
    }[];
    findOneById(id: number): Promise<{
        id: number;
        firstName: string;
        email: string;
    }>;
}
