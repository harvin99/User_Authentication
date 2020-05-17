const express = require("express");
const bcrypt = require("bcrypt");
const {ROLE, users} = require('./../data')
const router = express.Router();

router.get("/", (req, res) => {
  res.json(users);
});
router.post("/", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const user = {
        id: req.body.id,
        name: req.body.name,
        password: hashedPassword,
        role: ROLE.BASIC 
    };
    users.push(user);
    res.status(201).send();
  } catch {
    res.status(500).send();
  }
});
router.post("/login", async (req, res) => {
  const user = users.find((user) => user.name === req.body.name);
  if (user == null) res.status(400).send("Cannot find user");
  try {
    if (await bcrypt.compare(req.body.password, user.password))
      res.send("Login Success !");
    else res.send("Not Allowed !");
  } catch {
    res.status(500).send();
  }
});

module.exports = router;
