const express = require('express');
const storeRouter = express.Router();
const StoreOrder = require("../models/storeSchema");

const products = [
    { name: "Notebook", category: "Stationery", price: 3.5 },
    { name: "Ball Pen", category: "Stationery", price: 1 },
    { name: "Office Chair", category: "Furniture", price: 75 }
  ];


storeRouter.get('/products', (req, res) => {
    res.status(200).send(products);
  });

  storeRouter.post('/order', async (req, res) => {
    try {
      const { username, items, shippingAddress } = req.body;
      const newOrder = new store({ username, items, shippingAddress });
      await newOrder.save();
      res.status(201).json({ message: 'Order placed successfully!', order: newOrder });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Error placing order', error });
    }
  });


module.exports = storeRouter;