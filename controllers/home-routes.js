const router = require("express").Router();
const Review = require("../models/Review");
const User = require("../models/User");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  console.log("Got this far");
  try {
    res.render("login", { routeName: "loginRoute" });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  console.log("POST route working ");
  try {
    const newReview = Review.create({
      campground_name: req.body.campground_name,
      city: req.body.city,
      state: req.body.state,
      amenities: req.body.amenities,
      accessibility: req.body.accessibility,
      price: req.body.price,
      review_text: req.body.review_text,
      rating: req.body.rating,
    });

    res.status(200).json(newReview);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  console.log("login route working!!!!!!!!!!!!!!!!!");
  res.render("login", { routeName: "loginRoute" });
});

router.get("/new", async (req, res) => {
  res.render("post-new-review", {});
});

// router.get("/new", withAuth, async (req, res) => {
//   try {
//     const userData = await User.findAll({
//       attributes: { exclude: ["password"] },
//       order: [["name", "ASC"]],
//     });
//     const users = userData.map((project) => project.get({ plain: true }));
//     res.render("post-new-review", {
//       users,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
