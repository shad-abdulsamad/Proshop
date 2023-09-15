import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import products from './data/products.js'
import cors from 'cors';

const port =5000;
connectDB();

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.send("API is running");
});

app.get("/api/products", (req, res)=>{
    res.json(products);
});

app.get("/api/products/:id", (req, res)=>{
   const productId = parseInt(req.params.id,10);
    const product = products.find((p)=>p._id === productId);
    res.json(product);
});


app.listen(port, function(){
    console.log(`The server is running on port ${port}`);

});

// https://github.com/shad-abdulsamad/Proshop-v3.git