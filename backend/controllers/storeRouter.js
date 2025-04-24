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
storeRouter.put('/updatestore/:id', async (req, res) => {
    try {
      const {id} = req.params;
      if(!id){
        return res.status(400).send({message:"Please provide id"});
      }
      const {username, items, shippingAddress } = req.body;
      const updatedstore = await store.findOneAndUpdate({_id:id},
        { username, items, shippingAddress   },
        { new: true }
      );
  
      if (!updatedstore) {
        return res.status(404).send({ message: "store not found" });
      }
  
      res.status(200).send({ message: "store updated successfully", store: updatedstore });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Error updating store",error });
    }
  });


module.exports = storeRouter;