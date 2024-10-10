import axios from "axios";
import { Cat } from "../models/cat";

export class catRepository {

    urlApi = process.env.API_URL || 'https://api.thecatapi.com/v1';
    async getAllCats(): Promise<Cat[]> {
        try {
            const response = await axios.get(`${this.urlApi}/breeds`);
            return response.data;
        }
        catch (e) {
            console.log(e);
            throw new Error('Error fetching data from The Cat API');
        }
    }

    async getCatById(id: string): Promise<Cat | null> {
        try { 
            const response = await axios.get(`${this.urlApi}/breeds/${id}`);
            return response.data;
        }
        catch (e) {
            console.log(e);
            throw new Error('Error fetching data from The Cat API');
        }
    }

    async getSearchCats(query: string): Promise<Cat[]> {
        try {
            const response = await axios.get(`${this.urlApi}/breeds/search?q=${query}`);
            console.log(`${this.urlApi}/breeds/search?q=${query}`)
            return response.data;
        }
        catch (e) {
            console.log(e);
            throw new Error('Error fetching data from The Cat API');
        }
    }

}
