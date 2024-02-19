import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { Unit } from "./enums/unit";

@Entity()
export class MeasureOfAnalysis {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @Column()
    unit: Unit;
}



/*
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Unit } from "./enums/unit.schema";


@Schema({

    timestamps: true
})



export class MeasureOfAnalysis extends Document {


    @Prop({ unique: [true, 'Name already Exists'] })
    name: String

    @Prop()
    unit: Unit



}

*/