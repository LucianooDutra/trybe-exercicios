import express from 'express';
import 'express-async-errors';
import PlantsRoutes from './routes/Plants.routes';
import SunnyRoutes from './routes/Sunny.routes';
import erroMiddleware from './middlewares/errorMiddleware';

const app = express();

app.use(express.json());

app.use('/plants', PlantsRoutes);
app.use('/sunny', SunnyRoutes);

app.use(erroMiddleware);

export default app;