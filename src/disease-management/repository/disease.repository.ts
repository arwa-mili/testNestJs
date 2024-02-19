import { Injectable } from "@nestjs/common";
import { DataSource,  Repository } from "typeorm";
import { Disease } from "src/models/disease.entity";
import { IDiseaseRepository } from "../interfaces/IDiseaseRepository";


@Injectable()
export class DiseaseRepository extends Repository<Disease> implements IDiseaseRepository {
    constructor(
        private readonly datasource: DataSource
    ) { super(Disease, datasource.createEntityManager()) }



    createAndSave(diseaseData: Partial<Disease>): Promise<Disease> {
        const newDisease = this.create(diseaseData);
        return this.save(newDisease);
    }


    findById(id: number): Promise<Disease> {
        const disease = this.findOneBy({ id });
        return disease;


    }

}