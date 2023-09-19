import express from "express";
import products from '../data/products.js';
const router = express.Router();

router.get("/", (req, res)=>{
    res.json(products);
});

router.get("/:id", (req, res)=>{
   const productId = parseInt(req.params.id,10);
    const product = products.find((p)=>p._id === productId);
    res.json(product);
});

export default router;