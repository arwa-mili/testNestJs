import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { DiseaseMeasure } from 'src/models/diseaseMeasure.entity';
import { DiseaseService } from '../Service/disease.service';
import { Disease } from 'src/models/disease.entity';
import { UpdateDiseaseDto } from '../dto/updateDiseaseDto';

@Controller('disease')
export class DiseaseController {


    constructor(private diseaseService: DiseaseService) { }


    @Post('/')
    addNewDisease(@Body() diseaseDto: Disease): Promise<Disease> {
        return this.diseaseService.addDisease(diseaseDto);

    }


   
    @Get('/:id')
    getDiseaseById(@Param('id') id: number): Promise<Disease> {
        return this.diseaseService.getDiseaseById(id);
    }

    @Patch('/:id')
    updateDisease(@Param('id') id: number,
    @Body() updateDiseaseDto: UpdateDiseaseDto,
  ): Promise<Disease> {
    const { name, measureIds } = updateDiseaseDto;
    return this.diseaseService.updateDisease(id, name, measureIds);
    }

    /*
        @Post('/addMeasure')
        async addNewMeasure(@Body() diseaseMeasureDto: DiseaseMeasure): Promise<DiseaseMeasure[]> {
            return this.diseaseService.addNewMeasure();
        }
        */
}

/*
 

    deleteDisease()

    
    

    addMeasure()

    deleteMeasureById()

    updateMeasure()
    */



