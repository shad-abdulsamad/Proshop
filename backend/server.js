import express from 'express';
import products from './data/products.js'

const port = 5000;

const app = express();

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
    console.log("The server is running on port 5000");

});