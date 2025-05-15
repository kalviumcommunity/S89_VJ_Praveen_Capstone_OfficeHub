const express = require('express');
const cartRouter = express.Router();
const Cart = require('../models/cartSchema');
const cartSchema = require('../models/cartSchema');



// POST: Add a new cart or add products to an existing cart
cartRouter.post('/', async (req, res) => {
  try {
    const { userId, products } = req.body;

    if (!userId || !products || products.length === 0) {
      return res.status(400).json({ message: 'User ID and products are required' });
    }

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      // Create a new cart if it doesn't exist
      cart = new Cart({ userId, products });
    } else {
      // Add products to the existing cart
      products.forEach((product) => {
        const existingProduct = cart.products.find((p) => p.product.toString() === product.product);
        if (existingProduct) {
          existingProduct.quantity += product.quantity;
        } else {
          cart.products.push(product);
        }
      });
    }

    cart.updatedAt = new Date();
    await cart.save();

    res.status(201).json({ message: 'Cart updated successfully', cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating cart', error });
  }
});

// GET: Fetch all carts
cartRouter.get('/', async (req, res) => {
  try {
    const carts = await Cart.find().populate('userId').populate('products.product');
    res.status(200).json(carts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching carts', error });
  }
});

// GET: Fetch a single cart by user ID
cartRouter.get('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const cart = await Cart.findOne({ userId }).populate('products.product');

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    res.status(200).json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching cart', error });
  }
});

// PUT: Replace the entire cart for a user
cartRouter.put('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const { products } = req.body;

    if (!products || products.length === 0) {
      return res.status(400).json({ message: 'Products are required' });
    }

    const updatedCart = await Cart.findOneAndUpdate(
      { userId },
      { products, updatedAt: new Date() },
      { new: true, upsert: true, runValidators: true }
    );

    res.status(200).json({ message: 'Cart replaced successfully', cart: updatedCart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error replacing cart', error });
  }
});

// PATCH: Update specific products in the cart
cartRouter.patch('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const { products } = req.body;

    if (!products || products.length === 0) {
      return res.status(400).json({ message: 'Products are required' });
    }

    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    products.forEach((product) => {
      const existingProduct = cart.products.find((p) => p.product.toString() === product.product);
      if (existingProduct) {
        existingProduct.quantity = product.quantity;
      } else {
        cart.products.push(product);
      }
    });

    cart.updatedAt = new Date();
    await cart.save();

    res.status(200).json({ message: 'Cart updated successfully', cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating cart', error });
  }
});

// DELETE: Remove a product from the cart or delete the entire cart
cartRouter.delete('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const { productId } = req.body;

    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    if (productId) {
      // Remove a specific product from the cart
      cart.products = cart.products.filter((p) => p.product.toString() !== productId);
      cart.updatedAt = new Date();
      await cart.save();
      return res.status(200).json({ message: 'Product removed from cart', cart });
    } else {
      // Delete the entire cart
      await Cart.findOneAndDelete({ userId });
      return res.status(200).json({ message: 'Cart deleted successfully' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting cart', error });
  }
});

module.exports = cartRouter;