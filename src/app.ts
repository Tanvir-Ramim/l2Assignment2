import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRoutes } from './app/modules/product/product.route';
import { OrderRoutes } from './app/modules/order/order.route';
const app: Application = express();

const port = 3000;

// parser
app.use(express.json());
app.use(cors());

app.use('/product/api',ProductRoutes)
app.use('/order/api',OrderRoutes)

// app.all('*', (req, res) => {
//   res.status(404).json({
//     success: false,
//     message: 'Route not found'
//   });
// })
app.get('/', (req: Request, res: Response) => {
 
  res.send("server is running");
});

export default app;
