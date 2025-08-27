import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI as string;

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Conectado a MongoDB Atlas');
  } catch (error) {
    console.error('Error conectando a MongoDB:', error);
    process.exit(1);
  }
};



// NO OLVIDAR IR A MONGODB ATLAS
// CREAR LA BD Y PONER LA IP DE TU PC EN LA LISTA DE IPs PERMITIDAS PARA PODER CONECTARTE A LA BASE DE DATOS