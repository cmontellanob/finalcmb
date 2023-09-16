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
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/productos', productosRoutes);
app.use('/api/categorias', categoriasRoutes);

export default app;
