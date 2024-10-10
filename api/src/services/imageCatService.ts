import { IImagesCatsService } from "../interfaces/IImagesCats";
import { imageCats } from "../models/imageCat";
import { ImageCatRepository } from "../repositories/imageCatRepository";

export class ImageCatService implements IImagesCatsService {
    private imageCatRepository: ImageCatRepository;

    constructor() {
        this.imageCatRepository = new ImageCatRepository();
    }
    async getImageCatById(id: string): Promise<imageCats[] | null> {
        return await this.imageCatRepository.getImageCatById(id);
    }
}