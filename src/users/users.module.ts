import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/models/user.entity';
import { UsersController } from './users.controller';
import { AuthModule } from 'src/auth/auth.module';
import { UserRepository } from './repository/users.repository';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forFeature([User, UserRepository]),
  ],
  providers: [UsersService, UserRepository],

  controllers: [UsersController],
})
export class UsersModule { }
