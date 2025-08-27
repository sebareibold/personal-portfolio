import Content, { IContent } from '../models/content.model';

export class ContentManager {
  /**
   * Obtiene todas las secciones de contenido.
   */
  public async getSections(): Promise<IContent[]> {
    try {
      const sections = await Content.find();
      return sections;
    } catch (error) {
      console.error('Error al obtener las secciones de contenido:', error);
      throw new Error('No se pudo obtener el contenido.');
    }
  }

  /**
   * Obtiene una sección específica por su nombre.
   */
  public async getSection(seccion: string): Promise<IContent | null> {
    try {
      const section = await Content.findOne({ seccion });
      return section;
    } catch (error) {
      console.error('Error al obtener la sección:', error);
      throw new Error('No se pudo encontrar la sección.');
    }
  }

  /**
   * Crea o actualiza una sección de contenido.
   * Valida que el nombre de la sección sea uno de los valores permitidos.
   */
  public async createOrUpdateSection(data: Partial<IContent>): Promise<IContent> {
    if (!data.seccion || !data.titulo) {
      throw new Error('La sección y el título son campos obligatorios.');
    }

    const validSections = ['sobre_mi', 'proyectos', 'skills', 'contacto', 'experiencia'];
    if (!validSections.includes(data.seccion)) {
      throw new Error('El nombre de la sección no es válido.');
    }
    
    try {
      let content = await Content.findOne({ seccion: data.seccion });
      if (content) {
        Object.assign(content, data);
        await content.save();
      } else {
        content = await Content.create(data);
      }
      return content;
    } catch (error) {
      console.error('Error al crear o actualizar la sección:', error);
      throw new Error('No se pudo guardar la información de la sección.');
    }
  }
  
  /**
   * Elimina una sección por su nombre.
   */
  public async deleteSection(seccion: string): Promise<boolean> {
    try {
      const result = await Content.deleteOne({ seccion });
      return result.deletedCount > 0;
    } catch (error) {
      console.error('Error al eliminar la sección:', error);
      throw new Error('No se pudo eliminar la sección.');
    }
  }
}