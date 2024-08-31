const jwt = require("jsonwebtoken");

const isUserAuthenticated = (req, res, next) => {
  if (!req || !req.headers) {
    return res.status(400).json({ error: "Invalid request" });
  }
  const token = req.headers.token;

  if (!token) {
    return res.status(403).send("provid a token❌");
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    try {
      req.id = decoded.id;
      next();
    } catch (error) {
      console.log(error);
    }
  });
};

module.exports = isUserAuthenticated;
