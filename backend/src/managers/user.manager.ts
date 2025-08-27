import User, { IUser } from '../models/user.model';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'mi_secreto_super_seguro';
const JWT_EXPIRES_IN = '1h';

export class UserManager {
  /**
   * Registra un nuevo usuario.
   */
  public async registerUser(data: Partial<IUser>): Promise<IUser> {
    if (!data.nombre || !data.email || !data.contrasena) {
      throw new Error('Nombre, email y contraseña son obligatorios para el registro.');
    }
    
    try {
      const newUser = await User.create(data);
      return newUser;
    } catch (error: any) {
      if (error.code === 11000) {
        throw new Error('El email ya está registrado.');
      }
      console.error('Error al registrar el usuario:', error);
      throw new Error('No se pudo registrar el usuario.');
    }
  }

  /**
   * Autentica a un usuario y genera un token JWT.
   */
  public async loginUser(email: string, contrasena: string): Promise<{ token: string; user: Omit<IUser, 'contrasena'> }> {
    if (!email || !contrasena) {
      throw new Error('El email y la contraseña son obligatorios.');
    }
    
    try {
      const user = await User.findOne({ email }).select('+contrasena');
      if (!user || !(await user.compararContrasena(contrasena))) {
        throw new Error('Credenciales inválidas.');
      }

      const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
      
      const userWithoutPassword: any = user.toObject();
      delete userWithoutPassword.contrasena;

      return { token, user: userWithoutPassword };
    } catch (error: any) {
      console.error('Error al iniciar sesión:', error);
      throw new Error(error.message || 'No se pudo iniciar sesión.');
    }
  }

  /**
   * Obtiene un usuario por su ID, excluyendo la contraseña.
   */
  public async getUserById(id: string): Promise<IUser | null> {
    try {
      const user = await User.findById(id);
      return user;
    } catch (error) {
      console.error('Error al obtener usuario por ID:', error);
      throw new Error('No se pudo obtener la información del usuario.');
    }
  }
}


/* 
Explicación del Manager

    registerUser: Este método crea un nuevo usuario. Si el email ya existe, el error de unique: true del modelo se capturará y se lanzará un error con un mensaje más amigable.

    loginUser: Es el método más complejo.

        Busca un usuario por email, usando .select('+contrasena') para incluir la contraseña encriptada en la consulta, algo que el modelo no hace por defecto.

        Compara la contraseña recibida con la encriptada usando el método compararContrasena del modelo.

        Si la comparación es exitosa, genera un JSON Web Token (JWT) con la ID del usuario como payload.

        Elimina la contraseña del objeto del usuario antes de devolverlo, asegurando que nunca se envíe al cliente.

    Constantes: Las constantes para el secreto del JWT y el tiempo de expiración deben manejarse como variables de entorno (process.env.JWT_SECRET) para mayor seguridad.


*/