import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRoutes } from './app/modules/product/product.route';
import { OrderRoutes } from './app/modules/order/order.route';
import { NOTFOUND } from 'dns';
const app: Application = express();


// parser
app.use(express.json());
app.use(cors());

app.use('/product/api',ProductRoutes)
app.use('/order/api',OrderRoutes)




app.get('/', (req: Request, res: Response) => {
 
  res.send("server is running");
});


app.all('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
})



export default app;
