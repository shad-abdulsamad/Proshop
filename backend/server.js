import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors';

const port =5000;
connectDB();

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.send("API is running");
});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, function(){
    console.log(`The server is running on port ${port}`);

});

// https://github.com/shad-abdulsamad/Proshop-v3.git