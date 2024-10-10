import { ICatServices } from "../interfaces/ICatServices";
import { Cat } from "../models/cat";
import { catRepository } from "../repositories/catRepository";

export class CatService implements ICatServices{
   private catRepository: catRepository;

    constructor() {
      this.catRepository = new catRepository();
    }

    async getAllCats(): Promise<Cat[]> {
        return await this.catRepository.getAllCats();
    }

    async getCatById(id: string): Promise<Cat | null> {
        return await this.catRepository.getCatById(id);
    }

    async getSearchCats(query: string): Promise<Cat[]> {
        return await this.catRepository.getSearchCats(query);
    }
    
}