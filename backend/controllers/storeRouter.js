const express = require('express');
const storeRouter = express.Router();
const store = require("../models/storeSchema")

const products = [
    { name: "Notebook", category: "Stationery", price: 3.5 },
    { name: "Ball Pen", category: "Stationery", price: 1 },
    { name: "Office Chair", category: "Furniture", price: 75 }
  ];


storeRouter.get('/products', (req, res) => {
    res.status(200).send(products);
  });




module.exports = storeRouter;