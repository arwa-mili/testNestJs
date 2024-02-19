import { Body, Controller, Post } from "@nestjs/common";
import { MeasureService } from "../Service/measure.service";
import { DiseaseMeasure } from "src/models/diseaseMeasure.entity";
import { AddMeasureDto } from "../dto/addMeasureDto";

@Controller('measure')
export class MeasureController {


    constructor(private measureService : MeasureService) { }



    @Post('/')
    addNewMeasure(@Body() measureDto: AddMeasureDto): Promise<DiseaseMeasure> {
        return this.measureService.addMeasure(measureDto);

    }


}