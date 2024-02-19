import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DataSource, Repository } from "typeorm";
import { User } from 'src/models/user.entity';
import { IUserRepository } from "../interfaces/IUserRepository";

@Injectable()
export class UserRepository extends Repository<User> implements IUserRepository {
    constructor(
        private readonly datasource: DataSource
    ) { super(User, datasource.createEntityManager()) }
    async findByEmail(email: string): Promise<User | undefined> {
        return this.findOneBy({ email });
    }
    async findByPhoneNumber(phoneNumber: Number): Promise<User | undefined> {
        return this.findOneBy({ phoneNumber });
    }
    async createAndSave(userData: Partial<User>): Promise<User> {
        const newUser = this.create(userData);
        return this.save(newUser);
    }
    async findById(id: Number): Promise<User | undefined> {
        const user = this.findOneBy({ id });
        return user;
    }
    async findAll(): Promise<User[]> {
        return await this.find();
    }
}