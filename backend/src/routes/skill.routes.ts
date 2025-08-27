import { Router, Request, Response } from 'express';
import { SkillManager } from '../managers/skill.manager';

const router = Router();
const skillManager = new SkillManager();

// GET /api/skills
// Obtiene todas las habilidades.
router.get('/', async (req: Request, res: Response) => {
  try {
    const skills = await skillManager.getAllSkills();
    res.status(200).json(skills);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// GET /api/skills/:id
// Obtiene una habilidad por su ID.
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: 'El ID es requerido.' });
    }
    const skill = await skillManager.getSkillById(id);
    if (!skill) {
      return res.status(404).json({ message: 'Habilidad no encontrada.' });
    }
    res.status(200).json(skill);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// POST /api/skills
// Crea una nueva habilidad.
router.post('/', async (req: Request, res: Response) => {
  try {
    const newSkill = await skillManager.createSkill(req.body);
    res.status(201).json(newSkill);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

// PUT /api/skills/:id
// Actualiza una habilidad existente por su ID.
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: 'El ID es requerido.' });
    }
    const updatedSkill = await skillManager.updateSkill(id, req.body);
    if (!updatedSkill) {
      return res.status(404).json({ message: 'Habilidad no encontrada para actualizar.' });
    }
    res.status(200).json(updatedSkill);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE /api/skills/:id
// Elimina una habilidad por su ID.
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: 'El ID es requerido.' });
    }
    const deleted = await skillManager.deleteSkill(id);
    if (!deleted) {
      return res.status(404).json({ message: 'Habilidad no encontrada para eliminar.' });
    }
    res.status(200).json({ message: 'Habilidad eliminada exitosamente.' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

export default router;