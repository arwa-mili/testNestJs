import { User } from "src/models/user.entity";

export interface IUserRepository {
    findByEmail(email: string): Promise<User | undefined>;
    findByPhoneNumber(phoneNumber: number): Promise<User | undefined>;
    createAndSave(userData: Partial<User>): Promise<User>;
    findById(id: number): Promise<User | undefined>;
    findAll(): Promise<User[]>;

}