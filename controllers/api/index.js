const router = require("express").Router();
const Review = require("../../models/Review");

const reviewRoutes = require("./review-routes.js");

// router.use("/review", reviewRoutes);

router.get("/:state", async (req, res) => {
  console.log("hitting the state route!!!!!");
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

module.exports = router;
