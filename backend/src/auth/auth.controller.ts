import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/signIn.dto';
import { ApiBearerAuth } from '@nestjs/swagger';

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

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Req() request: Request) {
    return this.authService.getProfile(request['user'].sub);
  }
}
