import mongoose, { Schema, Document } from "mongoose";

export interface IContent extends Document {
  seccion: "sobre_mi" | "proyectos" | "skills" | "contacto" | "experiencia";
  titulo: string;
  descripcion: string;
  visible: boolean;
}

const ContentSchema: Schema = new Schema({
  seccion: {
    type: String,
    required: true,
    unique: true,
    enum: ["sobre_mi", "proyectos", "skills", "contacto", "experiencia"],
  },
  titulo: { type: String, required: true },
  descripcion: { type: String },
  visible: { type: Boolean, required: true, default: true },
});

export default mongoose.model<IContent>("Content", ContentSchema);
