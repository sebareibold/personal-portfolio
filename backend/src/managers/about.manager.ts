import About, { IAbout } from '../models/about.model';

export class AboutManager {
  /**
   * Obtiene la información de "Sobre Mí".
   * Como solo habrá un documento, se obtiene el primero que se encuentre.
   */
  public async getAbout(): Promise<IAbout | null> {
    try {
      const about = await About.findOne();
      return about;
    } catch (error) {
      console.error('Error al obtener la información de About:', error);
      throw new Error('No se pudo obtener la información de About.');
    }
  }

  /**
   * Crea o actualiza la información de "Sobre Mí".
   * Si ya existe un documento, lo actualiza. De lo contrario, crea uno nuevo.
   */
  public async createOrUpdateAbout(data: Partial<IAbout>): Promise<IAbout> {
    if (!data.descripcion) {
      throw new Error('La descripción no puede estar vacía.');
    }
    
    try {
      let about = await About.findOne();
      if (about) {
        // Actualiza el documento existente
        Object.assign(about, data);
        await about.save();
      } else {
        // Crea un nuevo documento
        about = await About.create(data);
      }
      return about;
    } catch (error) {
      console.error('Error al crear o actualizar About:', error);
      throw new Error('No se pudo guardar la información de About.');
    }
  }
}