import express, { Request, Response, Router } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import chalk from 'chalk';
import contactRoutes from './routes/contact.routes';
import experienceRoutes from './routes/experience.routes';
import projectRoutes from './routes/project.routes';
import userRoutes from './routes/user.routes'; 

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || '';

// Middleware para procesar JSON en requests
app.use(express.json());

// Conexión a la base de datos
mongoose.connect(MONGO_URI)
  .then(() => console.log(chalk.green('Conectado a MongoDB 🌱')))
  .catch(err => console.error(chalk.red('Error de conexión a MongoDB:', err)));

// Lista de endpoints para la ruta principal
const endpoints = [
  { path: '/api/about', methods: ['GET', 'POST', 'PATCH'] },
  { path: '/api/contact', methods: ['GET', 'POST'] },
  { path: '/api/projects', methods: ['GET', 'POST'] },
  { path: '/api/projects/:id', methods: ['GET', 'PUT', 'DELETE'] },
  { path: '/api/users/register', methods: ['POST'] },
  { path: '/api/users/login', methods: ['POST'] }
];

// Nuevo endpoint para verificar el estado de salud de la API
app.get('/api/health', (_req: Request, res: Response) => {
  const isConnected = mongoose.connection.readyState === 1; // 1 significa 'connected'
  if (isConnected) {
    res.status(200).json({ status: 'ok', database: 'connected' });
  } else {
    res.status(503).json({ status: 'error', database: 'disconnected' });
  }
});

// Ruta base para verificar que el servidor está funcionando y mostrar los endpoints
app.get('/api', (_req: Request, res: Response) => {
  res.status(200).json({
    message: 'API funcionando correctamente 👍',
    availableEndpoints: endpoints
  });
});

// Rutas principales
app.use('/api/contact', contactRoutes);
app.use('/api/experience', experienceRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/users', userRoutes); 

export default app;
