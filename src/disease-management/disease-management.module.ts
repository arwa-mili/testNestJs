import { Module } from '@nestjs/common';
import { Disease } from 'src/models/disease.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { DiseaseController } from './controllers/disease.controller';
import { DiseaseService } from './Service/disease.service';
import { MeasureController } from './controllers/measure.controller';
import { DiseaseRepository } from './repository/disease.repository';
@Module({


  imports: [
    AuthModule,
    TypeOrmModule.forFeature([Disease, DiseaseRepository]),
  ],
  providers: [DiseaseService, DiseaseRepository],
  exports: [DiseaseService],
  controllers: [DiseaseController, MeasureController],
})
export class DiseaseManagementModule {


}
