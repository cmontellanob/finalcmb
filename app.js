import express from 'express';
import morgan from 'morgan';

const app = express();

// Import routes
import usuariosRoutes from './routes/usuarios.routes.js';
import categoriasRoutes from './routes/categorias.routes.js';
import productosRoutes from './routes/productos.routes.js';

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);

export default app;
