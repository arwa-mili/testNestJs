
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from "typeorm";
import { Unit } from "./enums/unit";
import { Disease } from "./disease.entity";

@Entity()
export class DiseaseMeasure {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @Column({ type: "enum", enum: Unit })
    unit: Unit;

    

    @ManyToMany(()=> Disease, (Disease) => Disease.measures)
   
    diseases: Disease[];
}




/*
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Unit } from "./enums/unit.schema";


@Schema({

    timestamps: true
})



export class DiseaseMeasure extends Document {


    @Prop({ unique: [true, 'Name already Exists'] })
    name: String

    @Prop()
    unit: Unit



}

*/