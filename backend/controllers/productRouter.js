const express = require('express');
const productRouter = express.Router();
const Product = require('../models/productSchema ');


// POST: Add a new product
productRouter.post('/post', async (req, res) => {
  try {
    const { name, price, description, stock, createdBy } = req.body;

    if (!name || !price || !stock || !createdBy) {
      return res.status(400).json({ message: 'All required fields must be provided' });
    }

    const newProduct = new Product({ name, price, description, stock, createdBy });
    await newProduct.save();

    res.status(201).json({ message: 'Product added successfully', product: newProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding product', error });
  }
});

// GET: Fetch all products
productRouter.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching products', error });
  }
});

// GET: Fetch a single product by ID
productRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching product', error });
  }
});

// PUT: Update a product by ID
productRouter.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, description, stock } = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, price, description, stock },
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ message: 'Product updated successfully', product: updatedProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating product', error });
  }
});

// PATCH: Partially update a product by ID
productRouter.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(id, updates, { new: true, runValidators: true });

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ message: 'Product partially updated successfully', product: updatedProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error partially updating product', error });
  }
});

// DELETE: Remove a product by ID
productRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ message: 'Product deleted successfully', product: deletedProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting product', error });
  }
});



module.exports = productRouter;