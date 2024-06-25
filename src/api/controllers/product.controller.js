const Product = require('../models/product.model.js');

exports.registerProduct = async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.send(product);
};

exports.editProductCategory = async (req, res) => {
  const product = await Product.findById(req.params.id);
  product.category = req.body.category;
  await product.save();
  res.send(product);
};

exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.send(products);
};

exports.filterProducts = async (req, res) => {
  const { title, category } = req.query;
  const filter = {};
  if (title) filter.title = new RegExp(title, 'i');
  if (category) filter.category = category;

  const products = await Product.find(filter);

  res.send(products);
};

exports.updateProduct = async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(product);
};

exports.deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.send({ message: 'Product deleted' });
};
