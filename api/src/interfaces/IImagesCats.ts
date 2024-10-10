import { imageCats } from "../models/imageCat";

export interface IImagesCatsService { 
  getImageCatById(id: string): Promise<imageCats[] | null>; 
}