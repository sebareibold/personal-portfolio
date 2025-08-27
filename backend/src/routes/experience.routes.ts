import { Router, Request, Response } from 'express';
import { ExperienceManager } from '../managers/experience.manager';

const router = Router();
const experienceManager = new ExperienceManager();

// GET /api/experience
// Obtener todas las experiencias laborales.
router.get('/', async (req: Request, res: Response) => {
  try {
    const experiences = await experienceManager.getAllExperiences();
    res.status(200).json(experiences);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// GET /api/experience/:id
// Obtener una experiencia por su ID.
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: 'El ID es requerido.' });
    }
    const experience = await experienceManager.getExperienceById(id);
    if (!experience) {
      return res.status(404).json({ message: 'Experiencia no encontrada.' });
    }
    res.status(200).json(experience);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// POST /api/experience
// Crear una nueva experiencia laboral.
router.post('/', async (req: Request, res: Response) => {
  try {
    const newExperience = await experienceManager.createExperience(req.body);
    res.status(201).json(newExperience);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

// PUT /api/experience/:id
// Actualizar una experiencia existente.
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: 'El ID es requerido.' });
    }
    const updatedExperience = await experienceManager.updateExperience(id, req.body);
    if (!updatedExperience) {
      return res.status(404).json({ message: 'Experiencia no encontrada para actualizar.' });
    }
    res.status(200).json(updatedExperience);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE /api/experience/:id
// Eliminar una experiencia.
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: 'El ID es requerido.' });
    }
    const deleted = await experienceManager.deleteExperience(id);
    if (!deleted) {
      return res.status(404).json({ message: 'Experiencia no encontrada para eliminar.' });
    }
    res.status(200).json({ message: 'Experiencia eliminada exitosamente.' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

export default router;