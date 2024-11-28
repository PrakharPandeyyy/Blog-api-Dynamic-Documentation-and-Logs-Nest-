import { GetUserParamDto } from '../dto/get-user-params.dto';
import { AuthService } from 'src/auth/providers/auth.service';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
export declare class UsersService {
    private readonly userRepository;
    private readonly authService;
    constructor(userRepository: Repository<User>, authService: AuthService);
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
