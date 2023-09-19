import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';

import productRoutes from './routes/productRoutes.js';
import cors from 'cors';

const port =5000;
connectDB();

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.send("API is running");
});

app.use('/api/products', productRoutes);

app.listen(port, function(){
    console.log(`The server is running on port ${port}`);

});

// https://github.com/shad-abdulsamad/Proshop-v3.git