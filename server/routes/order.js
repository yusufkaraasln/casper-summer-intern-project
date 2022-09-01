const router = require("express").Router();
const { verifyAndAuthAdmin, verifyAndAuth, verify } = require("./verifyToken");
const Order = require("../models/Order");

router.post("/", verify, async (req, res) => {
  try {
    const newOrder = new Order(req.body);

    const savedOrder = await newOrder.save();

    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/:id", verifyAndAuthAdmin, async (req, res) => {
  try {
    const updated = await Order.findByIdAndUpdate(
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
    const order = await Order.findById(req.params.id);
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: ` ${order.title} ürünü silindi.`,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

//get a order by id
router.get("/one/:id", verifyAndAuth, async (req, res) => {
  try {
    const order = await Order.find({
      userId: req.params.id,
    });

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get all orders

router.get("/", async (req, res) => {
  try {
    const orders = await Order.find();

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json(error);
  }
});

// get monthly income

router.get("/income", verifyAndAuthAdmin, async (req, res) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const prevMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  try {
    const income = await Order.aggregate([
      { $match: { createdAt: { $gte: prevMonth } } },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: { month: "$month" },
          sales: { $sum: "$sales" },
        },
      },
    ]);

    res.status(200).json(income)

  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
