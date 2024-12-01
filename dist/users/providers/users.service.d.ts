import { GetUserParamDto } from '../dto/get-user-params.dto';
import { AuthService } from 'src/auth/providers/auth.service';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { createUserDto } from '../dto/create-user.dto';
export declare class UsersService {
    private readonly userRepository;
    private readonly authService;
    constructor(userRepository: Repository<User>, authService: AuthService);
    createUser(createUserDto: createUserDto): Promise<User>;
    findAll(getUserParamDto: GetUserParamDto, limit: number, page: number): {
        firstName: string;
        email: string;
    }[];
    findOneById(id: number): Promise<User>;
}
