const router = require("express").Router();
const userModel = require("../models/UserModel");
const { body, validationResult } = require("express-validator");

router.get("/", (req, res) => {});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await userModel.query().findById(id).withGraphJoined("userType");
  res.send(user);
});

router.post(
  "/", // username must be an email
  body("username").isEmail(),
  // password must be at least 5 chars long
  body("password").isLength({ min: 5 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send("success");
  }
);

router.put(
  "/", // username must be an email
  body("username").isEmail(),
  // password must be at least 5 chars long
  body("password").isLength({ min: 5 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send("success");
  }
);

module.exports = router;
