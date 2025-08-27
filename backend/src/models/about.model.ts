import mongoose, { Schema, Document } from 'mongoose';

export interface IAbout extends Document {
  descripcion: string;
}

const AboutSchema: Schema = new Schema({
  descripcion: { type: String, required: true },
});

export default mongoose.model<IAbout>('About', AboutSchema);