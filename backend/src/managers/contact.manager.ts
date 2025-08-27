import Contact, { IContact } from '../models/contact.model';

export class ContactManager {
  /**
   * Obtiene la información de contacto.
   * Se espera un solo documento, por lo que se obtiene el primero.
   */
  public async getContact(): Promise<IContact | null> {
    try {
      const contact = await Contact.findOne();
      return contact;
    } catch (error) {
      console.error('Error al obtener la información de Contacto:', error);
      throw new Error('No se pudo obtener la información de Contacto.');
    }
  }

  /**
   * Crea o actualiza la información de contacto.
   * Si ya existe un documento, lo actualiza. De lo contrario, crea uno nuevo.
   */
  public async createOrUpdateContact(data: Partial<IContact>): Promise<IContact> {
    if (!data.gmail || !data.link_de_linkedin) {
      throw new Error('El gmail y el link de LinkedIn son campos obligatorios.');
    }
    
    try {
      let contact = await Contact.findOne();
      if (contact) {
        // Actualiza el documento existente
        Object.assign(contact, data);
        await contact.save();
      } else {
        // Crea un nuevo documento
        contact = await Contact.create(data);
      }
      return contact;
    } catch (error) {
      console.error('Error al crear o actualizar Contacto:', error);
      throw new Error('No se pudo guardar la información de Contacto.');
    }
  }
}


/* Consideraciones Clave

    Lógica de Clase Única: A diferencia de los managers que gestionan múltiples
     documentos (como Proyectos), los managers de About y Contact están diseñados
      para manejar un único documento en sus respectivas colecciones. Esto se debe a
       que la información "Sobre Mí" y de "Contacto" generalmente es un solo conjunto de datos en un portafolio personal.

    Manejo de Errores: Se utiliza un bloque try-catch para manejar cualquier error
     que pueda ocurrir durante la interacción con la base de datos. Esto te permite 
     capturar los errores, registrarlos (console.error) y lanzar un nuevo error con un
      mensaje más claro para el cliente de la API.

    Validaciones: Se incluyen validaciones simples para asegurar que los campos obligatorios 
    (descripcion en About, gmail y link_de_linkedin en Contact) no estén vacíos antes de 
    intentar guardar el documento en la base de datos.

    Actualización y Creación: El método createOrUpdate es una buena práctica para manejar 
    la lógica de "upsert" (update + insert). Primero intenta encontrar un documento existente;
     si lo encuentra, lo actualiza con los nuevos datos; si no, crea uno nuevo.

*/