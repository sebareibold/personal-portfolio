import mongoose, { Schema, Document } from 'mongoose';

export interface ISkill extends Document {
  icono: string;
  nombre: string;
}

const SkillSchema: Schema = new Schema({
  icono: { type: String, required: true },
  nombre: { type: String, required: true, unique: true },
});

export default mongoose.model<ISkill>('Skill', SkillSchema);