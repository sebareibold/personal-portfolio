import Experience, { IExperience } from '../models/experience.model';

export class ExperienceManager {
  /**
   * Obtiene todas las experiencias laborales, ordenadas por fecha de inicio.
   */
  public async getAllExperiences(): Promise<IExperience[]> {
    try {
      const experiences = await Experience.find().sort({ fecha_inicio: -1 });
      return experiences;
    } catch (error) {
      console.error('Error al obtener las experiencias:', error);
      throw new Error('No se pudieron obtener las experiencias laborales.');
    }
  }

  /**
   * Obtiene una experiencia específica por su ID.
   */
  public async getExperienceById(id: string): Promise<IExperience | null> {
    try {
      const experience = await Experience.findById(id);
      return experience;
    } catch (error) {
      console.error('Error al obtener la experiencia por ID:', error);
      throw new Error('No se pudo encontrar la experiencia.');
    }
  }

  /**
   * Crea una nueva experiencia laboral.
   * Valida la presencia de campos obligatorios.
   */
  public async createExperience(data: Partial<IExperience>): Promise<IExperience> {
    if (!data.nombre_empresa || !data.puesto || !data.descripcion || !data.fecha_inicio) {
      throw new Error('Faltan campos obligatorios para crear la experiencia.');
    }
    
    try {
      const newExperience = await Experience.create(data);
      return newExperience;
    } catch (error) {
      console.error('Error al crear la experiencia:', error);
      throw new Error('No se pudo crear la experiencia laboral.');
    }
  }

  /**
   * Actualiza una experiencia laboral existente.
   */
  public async updateExperience(id: string, data: Partial<IExperience>): Promise<IExperience | null> {
    try {
      const updatedExperience = await Experience.findByIdAndUpdate(id, data, { new: true });
      return updatedExperience;
    } catch (error) {
      console.error('Error al actualizar la experiencia:', error);
      throw new Error('No se pudo actualizar la experiencia laboral.');
    }
  }

  /**
   * Elimina una experiencia por su ID.
   */
  public async deleteExperience(id: string): Promise<boolean> {
    try {
      const result = await Experience.deleteOne({ _id: id });
      return result.deletedCount > 0;
    } catch (error) {
      console.error('Error al eliminar la experiencia:', error);
      throw new Error('No se pudo eliminar la experiencia laboral.');
    }
  }
}