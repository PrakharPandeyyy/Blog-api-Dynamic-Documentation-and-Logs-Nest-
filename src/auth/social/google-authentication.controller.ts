import { Body, Controller, Post } from '@nestjs/common';
import { GoogleTokenDto } from './dtos/google-token.dto';
import { Auth } from '../decorator/auth.decorator';
import { AuthType } from '../enums/auth-type.enum';
import { GoogleAuthenticationService } from './providers/google-authentication.service';

@Controller('auth/google-authentication')
export class GoogleAuthenticationController {
  constructor(
    /**
     * Inject googleAuthenticationService
     */
    private readonly googleAuthenticationService: GoogleAuthenticationService,
  ) {}

  @Post()
  @Auth(AuthType.None)
  public authenticate(@Body() googleTokenDto: GoogleTokenDto) {
    return this.googleAuthenticationService.authenticate(googleTokenDto);
  }
}
