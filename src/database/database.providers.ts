
import { ConfigService } from 'src/config/config.service';
import { DataSource } from 'typeorm';
import * as glob from 'glob';
import { dataSourceOptions } from 'db/data-source';

const entities = glob.sync(__dirname + '/**/*.entity{.ts,.js}');

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      dataSourceOptions
    },
  },
];
