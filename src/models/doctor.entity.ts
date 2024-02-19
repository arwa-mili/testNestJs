import { Entity, Column, PrimaryGeneratedColumn, IsNull } from 'typeorm';
import { Person } from './person.entity';
import { Gender } from './enums/gender';
import { IsEmpty, IsNotEmpty } from 'class-validator';



@Entity('Doctor')
export class Doctor extends Person {



    @Column({ nullable: true })

    name: string;

    @Column({ nullable: true })

    surname: string;

    @Column({ nullable: true })
    password: string;
}
