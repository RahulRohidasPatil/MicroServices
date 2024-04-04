import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/signIn.dto';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
  ) {}

  @Post('signIn')
  async signIn(@Body() body: SignInDto) {
    const { name, email, image } = body;
    const user = await this.authService.signIn(name, email, image);
    return this.jwtService.sign({ sub: user.id, email: user.email });
  }

  @Get()
  findAll() {
    return this.authService.findAll();
  }
}
