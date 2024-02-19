import { Module } from '@nestjs/common';
import * as glob from 'glob';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from 'src/models/person.entity';
import { User } from 'src/models/user.entity';
import { Disease } from 'src/models/disease.entity';
import { DiseaseMeasure } from 'src/models/diseaseMeasure.entity';
import { dataSourceOptions } from 'db/data-source';

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => (dataSourceOptions),
        }),
    ],
})
export class DatabaseModule { }

