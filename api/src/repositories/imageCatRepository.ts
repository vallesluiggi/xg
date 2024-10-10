import axios from "axios";
import { imageCats } from "../models/imageCat";


export class ImageCatRepository {

    urlApi = process.env.API_URL || 'https://api.thecatapi.com/v1';

    async getImageCatById(id: string):Promise<imageCats[]> {
        console.log(`${this.urlApi}/images/search?breed_ids=${id}`);
        const response = await axios.get(`${this.urlApi}/images/search?breed_ids=${id}`);
        return response.data;
    }
}