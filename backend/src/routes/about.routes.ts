import { Router, Request, Response } from 'express';
import { AboutManager } from '../managers/about.manager';

const router = Router();
const aboutManager = new AboutManager();

// GET /api/about
router.get('/', async (req: Request, res: Response) => {
  try {
    const about = await aboutManager.getAbout();
    if (!about) {
      return res.status(404).json({ message: 'Información de About no encontrada.' });
    }
    res.status(200).json(about);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// POST /api/about
router.post('/', async (req: Request, res: Response) => {
  try {
    const newAbout = await aboutManager.createOrUpdateAbout(req.body);
    res.status(201).json(newAbout);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

export default router;