import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcryptjs';
import { User } from 'src/models/user.entity';
import { SignUpDto } from './dto/signup.dto';
import { AuthResponse } from './dto/authResponse.dto';

const EXPIRE_TIME = 20 * 1000;

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        private jwtService: JwtService,
    ) {}

    private async generateTokens(payload: any): Promise<AuthResponse['backendTokens']> {
        return {
            accessToken: await this.jwtService.signAsync(payload, {
                expiresIn: '20s',
                secret: process.env.jwtSecretKey,
            }),
            refreshToken: await this.jwtService.signAsync(payload, {
                expiresIn: '7d',
                secret: process.env.jwtRefreshTokenKey,
            }),
            expiresIn: new Date().setTime(new Date().getTime() + EXPIRE_TIME),
        };
    }

    async signUp(signUpDto: SignUpDto): Promise<AuthResponse> {
        const { email, phoneNumber, password, confirmPassword } = signUpDto;
        if (password !== confirmPassword) {
            throw new BadRequestException('Passwords do not match');
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = this.userRepository.create({
            email,
            phoneNumber,
            password: hashedPassword,
        });

        await this.userRepository.save(user);
        const payload = { username: user.email, sub: { name: user.name } };

        return { user, backendTokens: await this.generateTokens(payload) };
    }

    async loginWithEmail(email: string, password: string): Promise<AuthResponse> {
        try {
            const user = await this.userRepository.findOneBy({ email });
            if (!user || !(await bcrypt.compare(password, user.password))) {
                throw new UnauthorizedException('Invalid email or password');
            }
            const payload = { username: user.email, sub: { name: user.name } };
            return { user, backendTokens: await this.generateTokens(payload) };
        } catch (error) {
            throw new UnauthorizedException('Invalid email or password');
        }
    }

    async loginWithPhoneNumber(phoneNumber: Number, password: string): Promise<AuthResponse> {
        try {
            const user = await this.userRepository.findOneBy({ phoneNumber });
            if (!user || !(await bcrypt.compare(password, user.password))) {
                throw new UnauthorizedException('Invalid phoneNumber or password');
            }
            const payload = { username: user.email, sub: { name: user.name } };
            return { user, backendTokens: await this.generateTokens(payload) };
        } catch (error) {
            throw new UnauthorizedException('Invalid phoneNumber or password');
        }
    }

    async refreshToken(user: User): Promise<AuthResponse['backendTokens']> {
        const payload = { username: user.email, name: user.name };
        return await this.generateTokens(payload);
    }
}
