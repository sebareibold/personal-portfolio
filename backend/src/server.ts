import dotenv from 'dotenv';
import app from './app';
import { connectDB } from './config/db';
import chalk from 'chalk';

dotenv.config();

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
        console.log(chalk.cyan('================================='));
        console.log(chalk.green('Servidor corriendo :)'));
        console.log(chalk.yellow(`URL: http://localhost:${PORT}`));
        console.log(chalk.cyan('================================='));
    }); // <--- Este es el paréntesis que faltaba
  } catch (error) {
    console.error('Error al iniciar el servidor:', error);
    process.exit(1);
  }
})();