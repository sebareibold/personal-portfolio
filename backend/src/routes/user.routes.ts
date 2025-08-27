import { Router, Request, Response } from 'express';
import { UserManager } from '../managers/user.manager';

const router = Router();
const userManager = new UserManager();

// POST /api/users/register
// Ruta para registrar un nuevo usuario.
router.post('/register', async (req: Request, res: Response) => {
  try {
    const { nombre, email, contrasena } = req.body;
    const newUser = await userManager.registerUser({ nombre, email, contrasena });
    res.status(201).json({ message: 'Usuario registrado exitosamente.', user: { _id: newUser._id, nombre: newUser.nombre, email: newUser.email } });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

// POST /api/users/login
// Ruta para el inicio de sesión de un usuario.
router.post('/login', async (req: Request, res: Response) => {
  try {
    const { email, contrasena } = req.body;
    const { token, user } = await userManager.loginUser(email, contrasena);
    res.status(200).json({ token, user });
  } catch (error: any) {
    res.status(401).json({ message: error.message });
  }
});

export default router;
