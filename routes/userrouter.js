const express = require("express");
const User = require("../model/userModel");
const router = new express.Router();

router.post("/userSave", async (req, res) => {
  const { email } = req.body;
  const userExits = await User.findOne({ email });

  if (userExits) {
    return res.json(userExits);
  } else {
    try {
      const { family_name, name, given_name, email, locale, picture, sub } =
        req.body;
      const doc = new User({
        family_name: family_name,
        name: name,
        given_name: given_name,
        email: email,
        locale: locale,
        picture: picture,
        sub: sub,
      });
      const result = await doc.save();
      res.status(201).send(result);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
});

router.get("/getUser", async (req, res) => {
  User.find({})
    .then((result) => {
      res.status(200).json({
        result
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
