const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (err, charge) => {
      return err
        ? res.status(500).json({ message: err.message })
        : res.status(200).json({ message: charge.message });
    }
  );
});


module.exports = router;
