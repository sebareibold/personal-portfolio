import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUser extends Document {
  nombre: string;
  email: string;
  contrasena: string;
  compararContrasena(candidata: string): Promise<boolean>;
}

const UserSchema: Schema = new Schema({
  nombre: { type: String, required: true },
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    lowercase: true, 
    trim: true 
  },
  contrasena: { type: String, required: true, select: false },
});

// Middleware para encriptar la contraseña antes de guardarla
UserSchema.pre<IUser>('save', async function(next) {
  if (!this.isModified('contrasena')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.contrasena = await bcrypt.hash(this.contrasena, salt);
  next();
});

// Método para comparar contraseñas
UserSchema.methods.compararContrasena = async function(candidata: string): Promise<boolean> {
  return await bcrypt.compare(candidata, this.contrasena);
};

export default mongoose.model<IUser>('User', UserSchema);