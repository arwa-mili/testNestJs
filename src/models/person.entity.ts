import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Person')
export class Person {

    @PrimaryGeneratedColumn()
    id: Number;

    @Column({ unique: true })
    phoneNumber: Number;

    @Column({ unique: true })
    email: string;
}
