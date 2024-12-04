import { AuthService } from 'src/auth/providers/auth.service';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { UsersCreateManyProvider } from './users-create-many.provider';
import { CreateManyUsersDto } from '../dto/create-many-users.dto';
import { CreateUserProvider } from './create-user.provider';
import { FindOneUserByEmailProvider } from './find-one-user-by-email.provider';
export declare class UsersService {
    private readonly userRepository;
    private readonly authService;
    private readonly usersCreateManyProvider;
    private readonly createUserProvider;
    private readonly findOneUserByEmailProvider;
    constructor(userRepository: Repository<User>, authService: AuthService, usersCreateManyProvider: UsersCreateManyProvider, createUserProvider: CreateUserProvider, findOneUserByEmailProvider: FindOneUserByEmailProvider);
    createUser(createUserDto: CreateUserDto): Promise<User>;
    findOneById(id: number): Promise<any>;
    createMany(createManyUsersDto: CreateManyUsersDto): Promise<{
        users: User[];
    }>;
    findOneByEmail(email: string): Promise<User>;
}
