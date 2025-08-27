import mongoose, { Schema, Document } from 'mongoose';

export interface IProject extends Document {
  descripcion: string;
  imagen: string;
  link_github: string;
  link_produccion?: string;
  tecnologia: string[];
  categoria: string;
  fecha_inicio: Date;
  fecha_fin?: Date;
}

const ProjectSchema: Schema = new Schema({
  descripcion: { type: String, required: true },
  imagen: { type: String, required: true },
  link_github: { type: String, required: true },
  link_produccion: { type: String },
  tecnologia: { type: [String], required: true },
  categoria: { type: String, required: true },
  fecha_inicio: { type: Date, required: true },
  fecha_fin: { type: Date },
});

export default mongoose.model<IProject>('Project', ProjectSchema);