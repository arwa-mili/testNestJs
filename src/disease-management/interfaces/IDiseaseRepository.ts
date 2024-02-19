import { Disease } from "src/models/disease.entity";






export interface IDiseaseRepository {

    createAndSave(disease: Partial<Disease>): Promise<Disease>;
    findById(id: number): Promise<Disease>;



}