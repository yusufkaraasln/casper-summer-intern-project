const router = require("express").Router();

const { verifyAndAuthAdmin, verifyAndAuth, verify } = require("./verifyToken");
const Cart = require("../models/Cart");

router.post("/", verify, async (req, res) => {
  try {
    const newCart = new Cart(req.body);

    const savedCart = await newCart.save();

    res.status(201).json(savedCart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/:id", verifyAndAuth, async (req, res) => {
  try {
    const updated = await Cart.findByIdAndUpdate(
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

router.delete("/:id", verifyAndAuth, async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: ` ${cart.title} ürünü silindi.`,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

//get a user cart by user id
router.get("/one/:id", verifyAndAuth, async (req, res) => {
  try {
    const cart = await Cart.findOne({
        userId: req.params.id
    });


    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get all products

router.get("/", verifyAndAuthAdmin,async (req, res) => {

    try {
        const allCarts = Cart.find()

        res.status(200).json(allCarts);

    } catch (error) {
        res.status(500).json(error);
    }


});

module.exports = router;

