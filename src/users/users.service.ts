import { Injectable, NotFoundException } from '@nestjs/common';

import { User } from 'src/models/user.entity';
import { CompleteUserProfileDto } from './dto/createUser.dto';
import { UserRepository } from './repository/users.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(

    private readonly userRepository: UserRepository,
  ) { }
  
    async create(cmpUserDto: CompleteUserProfileDto, req: any): Promise<User> {
      const userId = req.user.id;
  
      const user = await this.userRepository.findById(userId);
  
      if (!user) {
        throw new NotFoundException('User not found');
      }
  
      user.name = cmpUserDto.name;
      user.surname = cmpUserDto.surname;
      user.weight = cmpUserDto.weight;
      user.height = cmpUserDto.height;
      user.gender = cmpUserDto.gender;
  
      await this.userRepository.findById(userId);
  
      return user;
    }
    

  findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }
}
