import { Injectable, NotFoundException } from '@nestjs/common';
import { Disease } from 'src/models/disease.entity';
import { DiseaseRepository } from '../repository/disease.repository';
import { MeasureService } from './measure.service';

@Injectable()
export class DiseaseService {
    constructor(
        private readonly diseaseRepository: DiseaseRepository,

        private readonly measureService : MeasureService,
    ) { }


    async addDisease(diseaseInfo): Promise<Disease> {


        const { name } = diseaseInfo;
        const measures = [];

        const disease = await this.diseaseRepository.createAndSave({
            name,
            measures,
        });
        return disease;
    }

    async getDiseaseById(id): Promise<Disease> {
        const disease = await this.diseaseRepository.findById(id);
        return disease;

    }

    async updateDisease(id, name,measureIds) : Promise<Disease> {

        

        let currentdisease = await this.getDiseaseById(id);

        if (!currentdisease) {
          throw new NotFoundException('Disease not found');
        }
        currentdisease.name= name;


        const newMeasures = await this.measureService.findByIds(measureIds);
        currentdisease.measures = [...currentdisease.measures, ...newMeasures];
    
        return this.diseaseRepository.save(currentdisease);


    }
 

    async findAll(): Promise<Disease[]> {
        return await this.diseaseRepository.find();
    }

}