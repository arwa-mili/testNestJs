import { BadRequestException, Body, Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { SignUpDto } from './dto/signup.dto';
import { RefreshJwtStrategy } from './strategies/refreshToken.strategy';
import { AuthResponse } from './dto/authResponse.dto';


@Controller('auth')
export class AuthController {


  constructor(private authService: AuthService) { }

  @Post('/signup')
  signUp(@Body() signUpDto: SignUpDto): Promise<AuthResponse> {
    return this.authService.signUp(signUpDto);
  }

  @Post('/login')
  login(@Body() loginDto: LoginDto): Promise<AuthResponse> {

    if (!loginDto.email && !loginDto.phoneNumber) {
      throw new BadRequestException('Please provide either email or phoneNumber');
    }

    if (loginDto.email) {

      return this.authService.loginWithEmail(loginDto.email, loginDto.password);
    } else {

      return this.authService.loginWithPhoneNumber(loginDto.phoneNumber, loginDto.password);
    }
  }
  @UseGuards(RefreshJwtStrategy)
  @Post('/refresh')
  async refrshToken(@Request() req) {
    return this.authService.refreshToken(req.user);
  }
}

