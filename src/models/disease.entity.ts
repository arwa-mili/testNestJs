import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm";
import { DiseaseMeasure } from "./diseaseMeasure.entity";

@Entity()
export class Disease {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @ManyToMany(()=> DiseaseMeasure, (DiseaseMeasure) => DiseaseMeasure.diseases)
   
    measures: DiseaseMeasure[];
}



/*
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { DiseaseMeasure } from "./diseaseMeasure.schema";
import { type } from "os";


@Schema({

    timestamps: true
})



export class Disease extends Document {


    @Prop({ unique: [true, 'Duplicate phone numbers entered'] } )
    name: String


    @Prop({ type: [{ type: Types.ObjectId, ref: 'DiseaseMeasure' }] })
    measures : DiseaseMeasure[]

}

*/