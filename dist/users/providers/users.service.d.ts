import { AuthService } from 'src/auth/providers/auth.service';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { UsersCreateManyProvider } from './users-create-many.provider';
import { CreateManyUsersDto } from '../dto/create-many-users.dto';
export declare class UsersService {
    private readonly userRepository;
    private readonly authService;
    private readonly usersCreateManyProvider;
    constructor(userRepository: Repository<User>, authService: AuthService, usersCreateManyProvider: UsersCreateManyProvider);
    createUser(createUserDto: CreateUserDto): Promise<User>;
    findOneById(id: number): Promise<any>;
    createMany(createManyUsersDto: CreateManyUsersDto): Promise<{
        users: User[];
    }>;
}
