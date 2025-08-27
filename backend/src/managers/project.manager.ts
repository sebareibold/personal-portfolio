import Project, { IProject } from "../models/project.model";

export class ProjectManager {
  /**
   * Obtiene todos los proyectos, ordenados por fecha de inicio de forma descendente.
   */
  public async getAllProjects(): Promise<IProject[]> {
    try {
      const projects = await Project.find().sort({ fecha_inicio: -1 });
      return projects;
    } catch (error) {
      console.error('Error al obtener los proyectos:', error);
      throw new Error('No se pudieron obtener los proyectos.');
    }
  }

  /**
   * Obtiene un proyecto específico por su ID.
   */
  public async getProjectById(id: string): Promise<IProject | null> {
    try {
      const project = await Project.findById(id);
      return project;
    } catch (error) {
      console.error('Error al obtener el proyecto por ID:', error);
      throw new Error('No se pudo encontrar el proyecto.');
    }
  }

  /**
   * Crea un nuevo proyecto.
   * Valida la presencia de campos obligatorios.
   */
  public async createProject(data: Partial<IProject>): Promise<IProject> {
    if (!data.descripcion || !data.imagen || !data.link_github || !data.tecnologia || !data.categoria || !data.fecha_inicio) {
      throw new Error('Faltan campos obligatorios para crear el proyecto.');
    }

    try {
      const newProject = await Project.create(data);
      return newProject;
    } catch (error) {
      console.error('Error al crear el proyecto:', error);
      throw new Error('No se pudo crear el proyecto.');
    }
  }

  /**
   * Actualiza un proyecto existente.
   */
  public async updateProject(id: string, data: Partial<IProject>): Promise<IProject | null> {
    try {
      const updatedProject = await Project.findByIdAndUpdate(id, data, { new: true });
      return updatedProject;
    } catch (error) {
      console.error('Error al actualizar el proyecto:', error);
      throw new Error('No se pudo actualizar el proyecto.');
    }
  }

  /**
   * Elimina un proyecto por su ID.
   */
  public async deleteProject(id: string): Promise<boolean> {
    try {
      const result = await Project.deleteOne({ _id: id });
      return result.deletedCount > 0;
    } catch (error) {
      console.error('Error al eliminar el proyecto:', error);
      throw new Error('No se pudo eliminar el proyecto.');
    }
  }
}