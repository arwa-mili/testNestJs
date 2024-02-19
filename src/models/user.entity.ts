import { Entity, Column, PrimaryGeneratedColumn, IsNull } from 'typeorm';
import { Person } from './person.entity';
import { Gender } from './enums/gender';
import { IsEmpty, IsNotEmpty } from 'class-validator';



@Entity('User')
export class User extends Person {



    @Column({ nullable: true })

    name: string;

    @Column({ nullable: true })

    surname: string;

    @Column({
        type: 'enum',
        enum: Gender,
        nullable: true,
    })
    gender: Gender;

    @Column({ nullable: true })
    height: Number;

    @Column({ nullable: true })
    weight: Number;

    @Column({ nullable: true })
    password: string;
}
