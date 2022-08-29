const jwt = require("jsonwebtoken");

const verify = (req, res, next) => {
  const authHeader = req.headers["token"];
  if (authHeader) {
    const pureToken = authHeader.split(" ")[1];
    jwt.verify(pureToken, process.env.JWT_KEY, (err, decoded) => {
      if (err) {
        res.status(403).json({ message: "Geçersiz Token" });
      }

      req.user = decoded;

      next();
    });
  } else {
    res.status(401).json({ message: "Oturum açman gerekli" });
  }
};

const verifyAndAuth = (req, res, next) => {
  verify(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json({ message: "Bu işlemi yapmaya yetkiniz yok" });
    }
  });
};

const verifyAndAuthAdmin = (req, res, next) => {
  verify(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json({ message: "Bu işlemi yapmaya yetkiniz yok" });
    }
  });
};

module.exports = { verify, verifyAndAuth, verifyAndAuthAdmin };
