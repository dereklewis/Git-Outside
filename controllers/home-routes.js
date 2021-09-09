const router = require("express").Router();
const Review = require("../models/Review");

router.get("/", async (req, res) => {
  console.log("Got this far");
  try {
    const dbReviewData = await Review.findAll({
      attributes: [
        "id",
        "campground_name",
        "city",
        "state",
        "description",
        "accessibility",
        "price",
        "review_text",
        "rating",
      ],
    });
    res.status(200).json(dbReviewData);
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
      description: req.body.description,
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
  // if (req.session.logged_in) {
  //   res.redirect("/");
  //   return;
  // }
  console.log("login route working!!!!!!!!!!!!!!!!!");
  res.render("login", { routeName: "loginRoute" });
});

router.get("/new", async (req, res) => {
  // if (req.session.logged_in) {
  // res.redirect("/");

  // }

  res.render("post-new-review", {});
});

router.get("/storybook", (req, res) =>
  res.render("index", { routeName: "Member" })
);

// router.get("/storybook2", (req, res) =>
//   res.render("login", { routeName: "Login" })
// );

module.exports = router;
