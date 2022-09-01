const router = require("express").Router();
const bcrypt = require("bcrypt");
const { verifyAndAuthAdmin, verifyAndAuth } = require("./verifyToken");
const Product = require("../models/Product");

router.post("/", verifyAndAuthAdmin, async (req, res) => {
  try {
    const newProduct = new Product(req.body);

    const savedProduct = await newProduct.save();

    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/:id", verifyAndAuthAdmin, async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updated);
  } catch (error) {
    res.status(501).json(error);
  }
});

router.delete("/:id", verifyAndAuthAdmin, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: ` ${product.title} ürünü silindi.`,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

//get a product by id
router.get("/one/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    const { __v, ...others } = product._doc;

    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get all products

router.get("/", async (req, res) => {
  const newQ = req.query.new;
  const catQ = req.query.category;

  try {
    let products;

    if (newQ) {
      products = await Product.find().sort({ createdAt: -1 }).limit(2)
    }else if (catQ) {
        products = await Product.find({ 
            categories: {
                $in: [catQ]
            }
         }) 
    }else{
        products = await Product.find();
    }

    res.status(200).json(products)

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

 
module.exports = router;
