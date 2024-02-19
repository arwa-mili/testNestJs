import { Controller, Get, Post, Body, UseGuards, Req, Put } from '@nestjs/common';
import { UsersService } from './users.service';


import { User } from 'src/models/user.entity';
import { CompleteUserProfileDto } from './dto/createUser.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) { }
  
    @Put('/complete')
    @UseGuards(AuthGuard())
    async completeProfile(@Body() createUserDto: CompleteUserProfileDto, @Req() req): Promise<User> {
  
  
      return this.usersService.create(createUserDto, req);
    }
  
  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
}

