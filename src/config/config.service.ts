import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';

@Injectable()
export class ConfigService {
    private readonly envConfig: Record<string, string>;
    constructor() {
        const result = dotenv.config();

        if (result.error) {
            this.envConfig = process.env;
        } else {
            this.envConfig = result.parsed;
        }
    }

    public get(key: string): string {
        return this.envConfig[key];
    }

    public async getPortConfig() {
        return this.get('PORT');
    }

    public async getMongoConfig() {
        return {
            //baaed n7awlou ll .env
            uri: 'mongodb+srv://arwa_32:XLwjfv9Bnzje0mpo@cluster0.dkshg.mongodb.net/?retryWrites=true&w=majority',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
    }
}
