import { join } from "path";
import { Disease } from "src/models/disease.entity";
import { DiseaseMeasure } from "src/models/diseaseMeasure.entity";
import { Doctor } from "src/models/doctor.entity";
import { Person } from "src/models/person.entity";
import { User } from "src/models/user.entity";
import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions: DataSourceOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '0000',
    database: 'hcare',
    // entities: [__dirname + '/src/models/*.entity{.ts,.js}'],
    entities: [User, Disease, DiseaseMeasure, Person, Doctor],
    migrations: [join(__dirname, '/../../', 'database/migrations/**/*{.ts,.js}')],
    migrationsTableName: "test_migration",
    synchronize: false,
    logging: true,
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;