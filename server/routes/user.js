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


router.delete("/:id",verifyAndAuthAdmin,async(req,res)=>{
    try {
        const user = await User.findById(req.params.id);
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message: ` @${user.username} kullanıcısı silindi.`
        })
    } catch (error) {
        res.status(500).json(error);
    }
})


//get a user 
router.get("get/:id", verifyAndAuthAdmin, async(req,res)=>{
    try {
        const user = await User.findById(req.params.id);

            const { password, __v, ...others } = user._doc;

        res.status(200).json(others);
    } catch (error) {
        
    }
})

//get all users

module.exports = router;
