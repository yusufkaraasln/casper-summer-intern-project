const router = require("express").Router();
const bcrypt = require("bcrypt");
const { verifyAndAuthAdmin, verifyAndAuth } = require("./verifyToken");
const User = require("../models/User");

router.put("/:id", verifyAndAuth, async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(req.body.password, salt);
  if (req.body.password) {
    req.body.password = hash;
  }

  try {
    const updated = await User.findByIdAndUpdate(
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
    const user = await User.findById(req.params.id);
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: ` @${user.username} kullanıcısı silindi.`,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

//get a user
router.get("one/:id", verifyAndAuthAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    const { password, __v, ...others } = user._doc;

    res.status(200).json(others);
  } catch (error) {}
});

//get all users

router.get("/", verifyAndAuthAdmin, async (req, res) => {
  const query = req.query.new;

  try {
    const users = query
      ? await User.find().sort({ _id: -1 }).limit(5)
      : await User.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/stats", verifyAndAuthAdmin, async (req, res) => {
  const date = new Date();
  const lastYearDate = new Date(date.setFullYear(date.getFullYear() - 1));
  console.log(new Date(lastYearDate));
  try {
    const data = await User.aggregate([
      {
        $match: {
          createdAt: {
            $gte: lastYearDate,
          },
        },
      },

      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: {
            month: "$month",
          },
          count: { $sum: 1 },
        },
      },
    ]);

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
