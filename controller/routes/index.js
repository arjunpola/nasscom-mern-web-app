var express = require('express');
var router = express.Router();

var { Product } = require('../model/products');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

//Create the new product
router.post("/create", async (req, res) => {
  const newProduct = new Product(req.body.data);
  await Product.create(newProduct);
  res.send("Product saved to the database!");
});

//Get the all product list
router.get("/read", async (req, res) => {
  const productList = await Product.find();
  res.send(JSON.stringify(productList));
});

//Update a product based on the id
router.put("/update/:id", async (req, res) => {
  const product_id = req.params.id;
  await Product.findByIdAndUpdate(product_id, {
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    discountPercentage: req.body.discountPercentage,
    rating: req.body.rating,
    stock: req.body.stock,
    brand: req.body.brand,
    category: req.body.category,
    thumbnail: req.body.thumbnail,
    image: req.body.image,
  });

  res.send("Product updated successfully!");
});

//Delete a product based on the id
router.delete("/delete/:id", async (req, res) => {
  const product_id = req.params.id;
  await Product.findByIdAndDelete(product_id);
  res.send("Product deleted!");
});

module.exports = router;
