import { Router, Request, Response } from 'express';
import { ContentManager } from '../managers/content.manager';

const router = Router();
const contentManager = new ContentManager();

// GET /api/content
// Obtener todas las secciones de contenido.
router.get('/', async (req: Request, res: Response) => {
  try {
    const sections = await contentManager.getSections();
    res.status(200).json(sections);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// GET /api/content/:seccion
// Obtener una sección específica por su nombre.
router.get('/:seccion', async (req: Request, res: Response) => {
  try {
    const { seccion } = req.params;
    if (!seccion) {
      return res.status(400).json({ message: 'El parámetro de sección es requerido.' });
    }
    const section = await contentManager.getSection(seccion);
    if (!section) {
      return res.status(404).json({ message: 'Sección no encontrada.' });
    }
    res.status(200).json(section);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// POST /api/content
// Crear o actualizar una sección de contenido.
router.post('/', async (req: Request, res: Response) => {
  try {
    const newSection = await contentManager.createOrUpdateSection(req.body);
    res.status(201).json(newSection);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE /api/content/:seccion
// Eliminar una sección por su nombre.
router.delete('/:seccion', async (req: Request, res: Response) => {
  try {
    const { seccion } = req.params;
    if (!seccion) {
      return res.status(400).json({ message: 'El parámetro de sección es requerido.' });
    }
    const deleted = await contentManager.deleteSection(seccion);
    if (!deleted) {
      return res.status(404).json({ message: 'Sección no encontrada para eliminar.' });
    }
    res.status(200).json({ message: 'Sección eliminada exitosamente.' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

export default router;