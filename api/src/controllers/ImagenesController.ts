import { Request, Response } from 'express';
import { ImageCatService } from "../services/imageCatService";
const imageCatService = new ImageCatService();

export const getFilterByCats = async (req: Request, res: Response) => {
    try {
        const cats = await imageCatService.getImageCatById(req.params.id);
        res.status(200).json(cats);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}