import mongoose, { Schema, Document } from 'mongoose';

export interface IContact extends Document {
  gmail: string;
  numero_de_telefono?: string;
  link_de_linkedin: string;
}

const ContactSchema: Schema = new Schema({
  gmail: { type: String, required: true, unique: true },
  numero_de_telefono: { type: String },
  link_de_linkedin: { type: String, required: true, unique: true },
});

export default mongoose.model<IContact>('Contact', ContactSchema);