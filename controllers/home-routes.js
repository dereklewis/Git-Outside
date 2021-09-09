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

router.get("/:state", async (req, res) => {
  try {
    const stateReviews = await Review.findAll(
      {
        where: {
          state: req.params.state,
        },
      },
      {
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
      }
    );
    // console.log(stateReviews);
    // const reviews = stateReviews.get({ plain: true });
    const reviews = stateReviews.map((project) => project.get({ plain: true }));
    console.log(reviews);
    res.render("allreviews", { reviews });
    // res.status(200).json(stateReviews);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// router.post("/", (req, res))

// router.get("/", withAuth, async (req, res) => {
//   try {
//     const userData = await User.findAll({
//       attributes: { exclude: ["password"] },
//       order: [["name", "ASC"]],
//     });

//     const users = userData.map((project) => project.get({ plain: true }));

//     res.render("homepage", {
//       users,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get("/storybook", (req, res) =>
  res.render("index", { routeName: "Member" })
);
router.get("/storybook2", (req, res) =>
  res.render("login", { routeName: "Login" })
);

module.exports = router;
