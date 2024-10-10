import { Cat } from "../models/cat";

export interface ICatServices{
    getAllCats(): Promise<Cat[]>;
    getCatById(id: string): Promise<Cat | null>;
    getSearchCats(query: string): Promise<Cat[]>;
}