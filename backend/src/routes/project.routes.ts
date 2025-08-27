import { Router, Request, Response } from 'express';
import { ProjectManager } from '../managers/project.manager';

const router = Router();
const projectManager = new ProjectManager();

// GET /api/projects
// Obtiene todos los proyectos.
router.get('/', async (req: Request, res: Response) => {
  try {
    const projects = await projectManager.getAllProjects();
    res.status(200).json(projects);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// GET /api/projects/:id
// Obtiene un proyecto por su ID.
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: 'El ID es requerido.' });
    }
    const project = await projectManager.getProjectById(id);
    if (!project) {
      return res.status(404).json({ message: 'Proyecto no encontrado.' });
    }
    res.status(200).json(project);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// POST /api/projects
// Crea un nuevo proyecto.
router.post('/', async (req: Request, res: Response) => {
  try {
    const newProject = await projectManager.createProject(req.body);
    res.status(201).json(newProject);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

// PUT /api/projects/:id
// Actualiza un proyecto existente por su ID.
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: 'El ID es requerido.' });
    }
    const updatedProject = await projectManager.updateProject(id, req.body);
    if (!updatedProject) {
      return res.status(404).json({ message: 'Proyecto no encontrado para actualizar.' });
    }
    res.status(200).json(updatedProject);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE /api/projects/:id
// Elimina un proyecto por su ID.
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: 'El ID es requerido.' });
    }
    const deleted = await projectManager.deleteProject(id);
    if (!deleted) {
      return res.status(404).json({ message: 'Proyecto no encontrado para eliminar.' });
    }
    res.status(200).json({ message: 'Proyecto eliminado exitosamente.' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

export default router;