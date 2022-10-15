import express from 'express';
import PlantsRoutes from './routes/Plants.routes';
import SunnyRoutes from './routes/Sunny.routes';

const app = express();

app.use(express.json());

app.use('/plants', PlantsRoutes);
app.use('/sunny', SunnyRoutes);

export default app;