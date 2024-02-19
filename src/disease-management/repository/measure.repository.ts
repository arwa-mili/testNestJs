import { Injectable } from "@nestjs/common";
import { DataSource,  Repository } from "typeorm";
import { Disease } from "src/models/disease.entity";
import { IDiseaseRepository } from "../interfaces/IDiseaseRepository";
import { DiseaseMeasure } from "src/models/diseaseMeasure.entity";
import { IMeasureRepository } from "../interfaces/IMeasureRepository";


@Injectable()
export class MeasureRepository extends Repository<DiseaseMeasure> implements IMeasureRepository {


    constructor(
        private readonly datasource: DataSource
    ) { super(Disease, datasource.createEntityManager()) }


     
    createAndSave(measureData: Partial<DiseaseMeasure>): Promise<DiseaseMeasure> {
        const newMeasure = this.create(measureData);
        
        return this.save(newMeasure);
    }

}