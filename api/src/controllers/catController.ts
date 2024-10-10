import { Request, Response } from 'express';
import { CatService } from '../services/catService';

const catService = new CatService();

export const getAllCats = async (req: Request, res: Response) => {
  try {
    const cats = await catService.getAllCats();
    res.status(200).json(cats); 
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getCatById = async (req: Request, res: Response) => {
    try { 
        const cat = await catService.getCatById(req.params.id);
        if (cat) {
        res.status(200).json(cat);
        } else {
        res.status(404).json({ message: 'Cat not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const getSearchCats = async (req: Request, res: Response) => {
    try { 
        const cats = await catService.getSearchCats(req.query.q as string);
        res.status(200).json(cats);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}