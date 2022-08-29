const router = require("express").Router();
const User = require("../models/User");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });

    const user = await newUser.save();

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user &&
    res.status(404).json({ message: "Şifre veya kullanıcı adı hatalı" });
    const validation = await bcrypt.compare(req.body.password, user.password);

    const { password, __v, ...others } = user._doc;

    const accesToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_KEY,
      { expiresIn: "1w" }
    );

    if (validation) {
      res.status(200).json({ ...others, accesToken });
    } else {
      res.status(401).json({ message: "Şifre veya kullanıcı adı hatalı" });
    }
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
