import { AuthService } from 'src/auth/providers/auth.service';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { UsersCreateManyProvider } from './users-create-many.provider';
import { CreateManyUsersDto } from '../dto/create-many-users.dto';
import { CreateUserProvider } from './create-user.provider';
import { FindOneUserByEmailProvider } from './find-one-user-by-email.provider';
import { FindOneByGoogleIdProvider } from './find-one-by-google-id.provider';
import { CreateGoogleUserProviderTs } from './create-google-user.provider.ts';
import { GoogleUser } from '../interfaces/google-user.interface';
export declare class UsersService {
    private readonly userRepository;
    private readonly authService;
    private readonly usersCreateManyProvider;
    private readonly createUserProvider;
    private readonly findOneUserByEmailProvider;
    private readonly findOneByGoogleIdProvider;
    private readonly createGoogleUserProvider;
    constructor(userRepository: Repository<User>, authService: AuthService, usersCreateManyProvider: UsersCreateManyProvider, createUserProvider: CreateUserProvider, findOneUserByEmailProvider: FindOneUserByEmailProvider, findOneByGoogleIdProvider: FindOneByGoogleIdProvider, createGoogleUserProvider: CreateGoogleUserProviderTs);
    createUser(createUserDto: CreateUserDto): Promise<User>;
    findOneById(id: number): Promise<any>;
    createMany(createManyUsersDto: CreateManyUsersDto): Promise<{
        users: User[];
    }>;
    findOneByEmail(email: string): Promise<User>;
    findOneByGoogleId(googleId: string): Promise<User>;
    createGoogleUser(googleUser: GoogleUser): Promise<User>;
}
