import mongoose, { Schema, Document } from 'mongoose';

export interface IExperience extends Document {
  nombre_empresa: string;
  puesto: string;
  descripcion: string;
  fecha_inicio: Date;
  fecha_fin?: Date;
}

const ExperienceSchema: Schema = new Schema({
  nombre_empresa: { type: String, required: true },
  puesto: { type: String, required: true },
  descripcion: { type: String, required: true },
  fecha_inicio: { type: Date, required: true },
  fecha_fin: { type: Date },
});

export default mongoose.model<IExperience>('Experience', ExperienceSchema);