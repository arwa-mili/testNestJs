import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DiseaseMeasure } from "src/models/diseaseMeasure.entity";
import { Repository } from "typeorm";
import { MeasureRepository } from "../repository/measure.repository";





@Injectable()
export class MeasureService {
    constructor(
        private readonly measureRepository: MeasureRepository,
    ) { }



    async addMeasure(measureDto): Promise<DiseaseMeasure> {
        const { name, unit } = measureDto;
        const diseases = []
        return await this.measureRepository.createAndSave({
            name,
            unit,
            diseases
        });

    }



    async findByIds(ids: number[]): Promise<DiseaseMeasure[]> {


        return await this.measureRepository
            .createQueryBuilder('measure')
            .where('measure.id IN (:...ids)', { ids })
            .getMany();


    }
}