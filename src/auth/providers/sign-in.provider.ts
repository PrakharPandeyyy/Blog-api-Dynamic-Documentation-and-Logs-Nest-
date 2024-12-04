import {
  forwardRef,
  Inject,
  Injectable,
  RequestTimeoutException,
  UnauthorizedException,
} from '@nestjs/common';
import { SignInDto } from '../dtos/signin.dto';
import { UsersService } from 'src/users/providers/users.service';
import { HashingProvider } from './hashing.provider';

@Injectable()
export class SignInProvider {
  constructor(
    /**
     * Inject usersService
     */
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
    /**
     * Inject hasingProvider
     */
    private readonly hasingProvider: HashingProvider,
  ) {}
  public async signIn(signInDto: SignInDto) {
    ///find User
    //throw exception if user not found
    const user = await this.usersService.findOneByEmail(signInDto.email);

    // compare password to the hash
    let isEqual = false;
    try {
      isEqual = await this.hasingProvider.comparePassword(
        signInDto.password,
        user.password,
      );
    } catch (e) {
      throw new RequestTimeoutException(e, {
        description: 'Could not compare passwords',
      });
    }
    if (!isEqual) {
      throw new UnauthorizedException('Incorrect Password');
    }

    //send confirmation

    return true;
  }
}
