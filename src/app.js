import express,{json} from 'express';
import morgan from 'morgan';
import cors from 'cors'
//Import routes

import productRoutes from './routes/products';
import categorieRoutes from './routes/categories';
//Initialization
const app = express();

//middleware
app.set('PORT',process.env.PORT || 3100)
app.use(cors());
app.use(morgan('dev'));
app.use(json());


//routes

app.use('/api/products',productRoutes);
app.use('/api/categories',categorieRoutes);


export default app;